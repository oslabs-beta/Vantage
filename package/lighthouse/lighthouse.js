// Import files needed for Lighthouse
const lighthouse = require('lighthouse');
const fs = require('fs');
const chromeLauncher = require('chrome-launcher');
const { exec } = require('child_process');
const { useDebugValue } = require('react');
const { waitForDebugger } = require('inspector');
const environment = process.env.NODE_ENV || 'development';

// Command line process:  "npm run dev" to launch the app -> "npm run lighthouse" to generate the report
console.log(environment);
// To do: Make these fields configurable during project setup
let PROJECT_FOLDER, SERVER_COMMAND, PORT, ENDPOINTS, FULL_VIEW;
const DATA_STORE = './data_store.json';
const CONFIG_FILE = './vantage_config.json';

// Initialize data from config file
async function initialize() {
  try {
    const currentData = await fs.readFileSync(CONFIG_FILE);
    const configData = JSON.parse(currentData);
    PROJECT_FOLDER = configData.nextAppSettings[environment].projectFolder;
    SERVER_COMMAND = configData.nextAppSettings[environment].serverCommand;
    PORT = configData.nextAppSettings[environment].port;
    ENDPOINTS = configData.nextAppSettings[environment].endpoints;
    FULL_VIEW = configData.nextAppSettings.fullView === 1;
  } catch {
    throw Error('Error accessing config file');
  }
}

// Function to initiate the project's dev server
async function startDevServer() {
  const commands = `npx kill-port ${PORT} && cd ${PROJECT_FOLDER} &&
  ${SERVER_COMMAND}`;
  await exec(commands, (err, stdOut, stdErr) => {
    console.log(err, stdOut, stdErr);
  });
  await new Promise(resolve => setTimeout(resolve, 5000));
}

async function getRoutes() {
  const commands = `cd ${PROJECT_FOLDER} && cd pages && ls`;

  await exec(commands, (err, stdOut, stdErr) => {
    const files = stdOut.split('\n');
    if (!Array.isArray(ENDPOINTS)) ENDPOINTS = [];
    if (!ENDPOINTS.includes('/')) ENDPOINTS.push('/');
    files.map((file) => {
      if (file.endsWith('.js') && !file.startsWith('_') && file !== 'index.js') {
        const endpointName = '/' + file.split('.js')[0];
        if (!ENDPOINTS.includes(endpointName)) ENDPOINTS.push('/' + file.split('.js')[0]);
      }
    });
  });
}

// Function to refresh data
async function getLighthouseResults(url, gitMessage) {
  // Initiate headless browser session and run Lighthouse for the specified URL
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']}); // Todo: Add incognito flag
  const options = {
    logLevel: 'silent', 
    output: 'html', 
    maxWaitForLoad: 10000, 
    port: chrome.port, 
    extraHeaders: {
      Authorization: '/*insert text*/'
    }
  };
  const runnerResult = await lighthouse(url, options);

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report;
  fs.writeFileSync('lhreport.html', reportHtml);


  // `.lhr` is the Lighthouse Result as a JS object
  fs.writeFileSync('analysis_results.json', JSON.stringify(runnerResult.lhr));
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
  return runnerResult.lhr;
}


async function generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMessage, fullView) {
  // Process returned object based on our defined criteria
  // Get the existing JSON file for this project
  // Update it with new data

  // Load existing JSON file or create new one if not yet present
  let data;
  try {
    const currentData = await fs.readFileSync(DATA_STORE);
    data = JSON.parse(currentData);
  } catch {
    data = {"run-list": [], "endpoints":[], "commits":{}, "overall-scores": {}, "web-vitals": {}};
  }

  // Parse through lhr and handle its current contents
  data["run-list"].push(snapshotTimestamp);
  data["run-list"] = Array.from(new Set(data["run-list"]));
  data["endpoints"].push(endpoint);
  data["endpoints"] = Array.from(new Set(data["endpoints"]));
  data["commits"][snapshotTimestamp] = commitMessage;
  if (data["overall-scores"][endpoint] === undefined) data["overall-scores"][endpoint] = {};
  data["overall-scores"][endpoint][snapshotTimestamp] = {
    "performance": lhr['categories']['performance']['score'], 
    "accessibility": lhr['categories']['accessibility']['score'], 
    "best-practices": lhr['categories']['best-practices']['score'], 
    "seo": lhr['categories']['seo']['score'], 
    "pwa": lhr['categories']['pwa']['score']   
  };

  
  // Update web vitals section of output object
  const webVitals = new Set(['first-contentful-paint', 'speed-index', 'largest-contentful-paint', 'interactive', 'total-blocking-time', 'cumulative-layout-shift']);
  
  for (const category of Object.keys(lhr['categories'])) {
    const refs = lhr['categories'][category]['auditRefs'];
    const keys = [];
    refs.map((ref) => keys.push(ref.id));
    for (const item of keys) {
      const currentResults = {
        'score' : lhr['audits'][item]['score'], 
        'numericValue' : lhr['audits'][item]['numericValue'], 
        'displayValue' : lhr['audits'][item]['displayValue']
      };
      if (!webVitals.has(item) && !fullView) continue; 
      const resultType = webVitals.has(item) ? 'web-vitals' : category;

      if (data[resultType] === undefined) data[resultType] = {};
      if (data[resultType][item] === undefined) {
        data[resultType][item] = lhr['audits'][item];
        delete data[resultType][item]['id'];
        delete data[resultType][item]['score'];
        delete data[resultType][item]['numericValue'];
        delete data[resultType][item]['displayValue'];
        delete data[resultType][item]['details'];
        delete data[resultType][item]['description'];
        data[resultType][item]['results'] = { [endpoint] : {[snapshotTimestamp]: currentResults}};
      } else if (data[resultType][item]['results'][endpoint] === undefined) {
      // score, numeric value, display value
        data[resultType][item]['results'][endpoint] = {[snapshotTimestamp] : currentResults};
      } else {
        data[resultType][item]['results'][endpoint][snapshotTimestamp] = currentResults;
      }
    }
  }

  // Save output to JSON
  fs.writeFileSync(DATA_STORE, JSON.stringify(data));
}

async function initiateRefresh() {
  await initialize();
  await getRoutes();
  await startDevServer();
  // Todo:  Iterate through each possible page to be checked
  const snapshotTimestamp = new Date().toISOString();

  for (const endpoint of ENDPOINTS) {
    const lhr = await getLighthouseResults(`http://localhost:${3000}${endpoint}`);
    await generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, "Sample commit message", FULL_VIEW);
  }

  // To do: New function to insert final JSON into HTML
}

initiateRefresh();
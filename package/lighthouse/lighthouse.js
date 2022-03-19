#!/usr/bin/env node

// Import required dependencies
const lighthouse = require('lighthouse');
const fs = require('fs');
const chromeLauncher = require('chrome-launcher');
const { exec, execSync } = require('child_process');
const kill = require('kill-port');
const htmlOutput = require('./html-script');

// Define constants to be used throughout various functions
let SERVER_COMMAND, BUILD_COMMAND, PORT, ENDPOINTS, CONFIG;
const log = (message) => fs.appendFileSync('./vantage/run_history.log', `\n${message}`);
const DATA_STORE = './vantage/data_store.json';

// Initialize all constants based on provided values in the ./vantage/vantage_config.json file.
function initialize() {
  try {
    const currentData = fs.readFileSync('./vantage/vantage_config.json');
    const configData = JSON.parse(currentData);
    SERVER_COMMAND = configData.nextAppSettings.serverCommand;
    BUILD_COMMAND = configData.nextAppSettings.buildCommand;
    PORT = configData.nextAppSettings.port;
    ENDPOINTS = configData.nextAppSettings.endpoints;
    //optimizes audit for desktop apps instead of the default mobile view
    if (process.env.AUDIT_MODE === 'desktop') CONFIG = configData.config;
    else CONFIG = {extends: 'lighthouse:default'};
  } catch (err) {
    log(`An error occurred while attempting to access the config file.  Please ensure that you have added ./vantage/vantage_config.json to your project, see the README for the template.`);
    log(err.stack);
    process.exit(1);
  }
}

// Build the NEXT project and then start server
async function startServer() {
  await kill(PORT);
  const stdOut = execSync(BUILD_COMMAND, { encoding: 'utf-8' });
  exec(SERVER_COMMAND, (err, stdOut, stdErr) => {
    if (err) throw Error(`Error starting project's server.\nAdditional error details: ${err}`);
  });
  await new Promise(resolve => setTimeout(resolve, 5000));
}

// Traverse the 'pages' folder in project directory and capture list of endpoints to check
function getRoutes(subfolders = '') {
  let commands = `cd pages`;
  if (subfolders !== '') commands += ` && cd ${subfolders}`;
  try {
    const stdOut = execSync(`${commands} && ls`, { encoding: 'utf-8' });
    if (stdOut.includes("Failed to compile.")) throw Error(`Project failed to compile.\nAdditional error details: ${stdOut}`);
    const files = stdOut.split('\n');
    if (!Array.isArray(ENDPOINTS)) ENDPOINTS = [];
    files.map((file) => {
      addFileToList(file, subfolders);
    });
    ENDPOINTS.sort();
  } catch (err) {
    throw Error(`Error capturing structure of pages folder. Please ensure your project follows the required structure for the NEXT.js pages folder.`);
  }
}

// Helper function to recursively traverse the pages folder and capture all endpoints
function addFileToList(file, subfolders) {
  const prefix = subfolders !== '' ? '/' + subfolders + '/' : '/';
  if (file.endsWith('.js') && !file.startsWith('_') && file !== 'index.js') {
    const endpointName = prefix + file.split('.js')[0];
    if (!ENDPOINTS.includes(endpointName)) {
      ENDPOINTS.push(endpointName); 
    }
  } else if (file === 'index.js') {
    const endpointName = prefix + '/';
    if (!ENDPOINTS.includes(prefix)) {
      ENDPOINTS.push(prefix); 
    }
  } else if (!file.endsWith('.js') && file !== 'api' && file !== '') {
    getRoutes(subfolders === '' ? file : subfolders + '/' + file);
  }
}

// Initiate a headless Chrome session and check performance of the specified endpoint
async function getLighthouseResults(url, gitMessage) {
  log('Getting report for ' + url);

  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'silent', 
    output: 'html', 
    maxWaitForLoad: 10000, 
    port: chrome.port
  };
  const runnerResult = await lighthouse(url, options, CONFIG);

  // `.lhr` is the Lighthouse Result as a JS object
  // fs.writeFileSync('analysis_results.json', JSON.stringify(runnerResult.lhr));
  log(`Performance score: ${runnerResult.lhr.categories.performance.score * 100}`);

  await chrome.kill();
  return runnerResult.lhr;
}

// Process the returned lighthouse object and update JSON file with new data
async function generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMessage, lastResult) {

  // Load existing JSON file or create new one if not yet present
  let data;
  try {
    const currentData = await fs.readFileSync(DATA_STORE);
    data = JSON.parse(currentData);
  } catch {
    data = {"run-list": [], "endpoints":[], "commits":{}, "overall-scores": {}, "web-vitals": {}};
  }

  // If more than 10 runs are present, store the oldest timestamp for use during delete lines below
  let oldestRun;
  if (data["run-list"].length >= 10) {
    if (!lastResult) oldestRun = data["run-list"][0];
    else oldestRun = data["run-list"].shift();
  }

  // Parse through lhr and handle its current contents
  data["run-list"].push(snapshotTimestamp);
  data["run-list"] = Array.from(new Set(data["run-list"]));
  data["endpoints"].push(endpoint);
  data["endpoints"] = Array.from(new Set(data["endpoints"])).sort();

  if (oldestRun !== undefined) delete data["commits"][oldestRun]; 
  data["commits"][snapshotTimestamp] = !lastResult ? ['PROCESSING IN PROGRESS, PLEASE WAIT', commitMessage] : commitMessage;
  if (data["overall-scores"][endpoint] === undefined) data["overall-scores"][endpoint] = {};
  if (oldestRun !== undefined) delete data["overall-scores"][endpoint][oldestRun]; 
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
      const currentResults = {'scoreDisplayMode' : lhr['audits'][item]['scoreDisplayMode'], 'score' : lhr['audits'][item]['score'], 'numericValue' : lhr['audits'][item]['numericValue'], 'displayValue' : lhr['audits'][item]['displayValue']};
      const resultType = webVitals.has(item) ? 'web-vitals' : category;

      if (data[resultType] === undefined) data[resultType] = {};
      
      if (data[resultType][item] === undefined) {
        data[resultType][item] = lhr['audits'][item];
        delete data[resultType][item]['id'];
        delete data[resultType][item]['score'];
        delete data[resultType][item]['numericValue'];
        delete data[resultType][item]['displayValue'];
        delete data[resultType][item]['details'];
        delete data[resultType][item]['scoreDisplayMode'];

        // Pull Learn More URL out of description 
        try {
          data[resultType][item]['url'] = data[resultType][item]['description'].match(/\[Learn [Mm]ore\]\((.+)\)/)[1];
          data[resultType][item]['description'] = data[resultType][item]['description'].match(/(.*) \[Learn [Mm]ore\]/)[1];
        } catch {
          data[resultType][item]['url'] = null;
        }

        // Pull excess URLs out of all descriptions
        data[resultType][item]['description'] = data[resultType][item]['description'].replace(/\(http.*\)/, '');
        data[resultType][item]['description'] = data[resultType][item]['description'].replace(/\[/, '');
        data[resultType][item]['description'] = data[resultType][item]['description'].replace(/\]/, '');

        data[resultType][item]['results'] = { [endpoint] : {[snapshotTimestamp]: currentResults}};
      } else if (data[resultType][item]['results'][endpoint] === undefined) {
      // score, numeric value, display value
        data[resultType][item]['results'][endpoint] = {[snapshotTimestamp] : currentResults};
      } else {
        data[resultType][item]['results'][endpoint][snapshotTimestamp] = currentResults;
      }
      if (oldestRun !== undefined) delete data[resultType][item]['results'][endpoint][oldestRun]; 
    }
  }

  // Save output to JSON
  fs.writeFileSync(DATA_STORE, JSON.stringify(data));
}

async function initiateRefresh() {
  
  try {
    const snapshotTimestamp = new Date().toISOString();
    const commitMsg = execSync("git log -1 --pretty=%B").toString().trim();

    log(`>>> New run for commit '${commitMsg}' at ${snapshotTimestamp}`);

    initialize();
    getRoutes();
    await startServer();
    
    for (const endpoint of ENDPOINTS) {
      const lhr = await getLighthouseResults(`http://localhost:${PORT}${endpoint}`);
      await generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMsg, endpoint === ENDPOINTS[ENDPOINTS.length - 1]);
    }
    htmlOutput();
    log('Tests completed');
  } catch(err) {
    log('Vantage was unable to complete for this commit');
    log(err.stack);
  } 
  log('>>> PROCESS EXITING');
  process.exit(0);
}

initiateRefresh();
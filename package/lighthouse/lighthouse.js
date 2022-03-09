// Import files needed for Lighthouse
const lighthouse = require('lighthouse');
const fs = require('fs');
const chromeLauncher = require('chrome-launcher');
const { exec } = require('child_process');
const { useDebugValue } = require('react');

// Command line process:  "npm run dev" to launch the app -> "npm run lighthouse" to generate the report

// To do: Make these fields configurable during project setup
let PROJECT_FOLDER, SERVER_COMMAND, PORT, ENDPOINTS;
const DATA_STORE = './data_store.json';
const CONFIG_FILE = './vantage_config.json';

// Initialize data from config file
async function initialize() {
  try {
    let currentData = await fs.readFileSync(CONFIG_FILE);
    let configData = JSON.parse(currentData);
    PROJECT_FOLDER = configData.nextAppSettings.projectFolder;
    SERVER_COMMAND = configData.nextAppSettings.serverCommand;
    PORT = configData.nextAppSettings.port;
    ENDPOINTS = configData.nextAppSettings.endpoints;

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
  
}

// Function to refresh data
async function getLighthouseResults(url, gitMessage) {

  // To Dos:  
  // Figure out browser configuration for security certificates
  // Research how to run this on sites requiring authentication
  // Configurability of lighthouseOptions (example options object below)

  // const lighthouseOptions = {
  //   extends: 'lighthouse:default',
  //   settings: {
  //     onlyCategories: ['accessibility'],
  //     emulatedFormFactor:'desktop',
  //     output: ['html'],
  //   },
  // }

  // Initiate headless browser session and run Lighthouse for the specified URL
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']}); // Todo: Add incognito flag
  const options = {logLevel: 'info', output: 'html', maxWaitForLoad: 60000, onlyCategories: ['performance'], port: chrome.port};
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


async function generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMessage) {
  // Process returned object based on our defined criteria
  // Get the existing JSON file for this project
  // Update it with new data

  // Load existing JSON file or create new one if not yet present
  let data;
  try {
    let currentData = await fs.readFileSync(DATA_STORE);
    data = JSON.parse(currentData);
  } catch {
    data = {"run-list": [], "endpoints":[], "commits":{}, "web-vitals": {}};
  }

  // Parse through lhr and handle its current contents
  data["run-list"].push(snapshotTimestamp);
  data["run-list"] = Array.from(new Set(data["run-list"]));
  data["endpoints"].push(endpoint);
  data["commits"][snapshotTimestamp] = commitMessage;

  // Update web vitals section of output object
  let webVitals = ['first-contentful-paint', 'speed-index', 'largest-contentful-paint', 'interactive', 'total-blocking-time', 'cumulative-layout-shift'];
  
  for (const item of webVitals) {
    let currentResults = {'score' : lhr['audits'][item]['score'], 'numericValue' : lhr['audits'][item]['numericValue'], 'displayValue' : lhr['audits'][item]['displayValue']};
    if (data['web-vitals'][item] === undefined) {
      data['web-vitals'][item] = lhr['audits'][item];
      delete data['web-vitals'][item]['id'];
      delete data['web-vitals'][item]['score'];
      delete data['web-vitals'][item]['numericValue'];
      delete data['web-vitals'][item]['displayValue'];
      data['web-vitals'][item]['results'] = { [endpoint] : {[snapshotTimestamp]: currentResults}};
    } else if (data['web-vitals'][item]['results'][endpoint] === undefined) {
    // score, numeric value, display value
      data['web-vitals'][item]['results'][endpoint] = {[snapshotTimestamp] : currentResults};
    } else {
      data['web-vitals'][item]['results'][endpoint][snapshotTimestamp] = currentResults;
    }
  }



  // Add remaining outputs to the object
  let webVitalsSet = new Set(webVitals);
  let keys = Object.keys(lhr['audits']);
  for (const item of keys) {
    if (!webVitalsSet.has(item)) {
      let resultType = lhr['audits'][item]['scoreDisplayMode'];
      if (data[resultType] === undefined) data[resultType] = {};
      // Add error results to data["error"]
      if (data[resultType][item] === undefined) {
        data[resultType][item] = lhr['audits'][item];
        delete data[resultType][item]['id'];
        delete data[resultType][item]['score'];
        delete data[resultType][item]['numericValue'];
        delete data[resultType][item]['displayValue'];
        delete data[resultType][item]['details'];
        delete data[resultType][item]['scoreDisplayMode'];
        data[resultType][item]['results'] = {};
      }
      
      if (data[resultType][item]['results'][endpoint] === undefined) data[resultType][item]['results'][endpoint] = {};
      data[resultType][item]['results'][endpoint][snapshotTimestamp] = {'score' : lhr['audits'][item]['score'], 'numericValue' : lhr['audits'][item]['numericValue'], 'displayValue' : lhr['audits'][item]['displayValue'], 'details' : lhr['audits'][item]['details']};
    }
  }

  // Save output to JSON
  fs.writeFileSync(DATA_STORE, JSON.stringify(data));

}

async function initiateRefresh() {
  await initialize();
  await startDevServer();
  // Todo:  Iterate through each possible page to be checked
  let snapshotTimestamp = new Date().toISOString();

  for (const endpoint of ENDPOINTS) {
    let lhr = await getLighthouseResults(`http://localhost:${3000}${endpoint}`);
    await generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, "Sample commit message");
  }

  // To do: New function to insert final JSON into HTML
}

initiateRefresh();
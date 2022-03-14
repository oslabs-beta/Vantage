#!/usr/bin/env node

// Import files needed for Lighthouse
const lighthouse = require('lighthouse');
const fs = require('fs');
const chromeLauncher = require('chrome-launcher');
const { exec, execSync } = require('child_process');
const { useDebugValue } = require('react');
const { waitForDebugger } = require('inspector');
const kill = require('kill-port');
const installHooks = require('../git-hooks/gitHookInstall');
// Command line process:  "npm run dev" to launch the app -> "npm run lighthouse" to generate the report

// Commit Message
// const commitMsg = execSync("git log -1 --pretty=%B")
//   .toString()
//   .trim();

// To do: Make these fields configurable during project setup
let SERVER_COMMAND, BUILD_COMMAND, PORT, ENDPOINTS, FULL_VIEW, CONFIG;
const DATA_STORE = './data_store.json';

// Initialize data from config file
function initialize() {
  try {
    const currentData = fs.readFileSync('./vantage_config.json');
    const configData = JSON.parse(currentData);
    SERVER_COMMAND = configData.nextAppSettings.serverCommand;
    BUILD_COMMAND = configData.nextAppSettings.buildCommand;
    PORT = configData.nextAppSettings.port;
    ENDPOINTS = configData.nextAppSettings.endpoints;
    FULL_VIEW = configData.nextAppSettings.fullView === 1;
    //optimizes audit for desktop apps instead of the default mobile view
    if (process.env.AUDIT_MODE === 'desktop') CONFIG = configData.config;
    else CONFIG = {extends: 'lighthouse:default'};
  } catch {
    throw Error('Error accessing config file');
  }
}

// Initiate the project's dev server based on command provided in config file
async function startServer() {
  await kill(PORT);
  const stdOut = execSync(BUILD_COMMAND, { encoding: 'utf-8' });
  console.log(stdOut);
  exec(SERVER_COMMAND, (err, stdOut, stdErr) => {
    console.log(err, stdOut, stdErr);
  });
  await new Promise(resolve => setTimeout(resolve, 5000));
}

// Function to traverse the 'pages' folder in project directory and capture list of endpoints to check
function getRoutes(subfolders = '') {
  let commands = `cd pages`;
  if (subfolders !== '') commands += ` && cd ${subfolders}`;
  try {
    const stdOut = execSync(`${commands} && ls`, { encoding: 'utf-8' });
    if (stdOut.includes("Failed to compile.")) throw Error("Project failed to compile");
    const files = stdOut.split('\n');
    if (!Array.isArray(ENDPOINTS)) ENDPOINTS = [];
    files.map((file) => {
      addFileToList(file, subfolders);
    });
  } catch {
    throw Error('Error capturing structure of pages folder');
  }
}

// Helper function to check file name and add to list or traverse additional folder levels as needed
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

// Function to refresh data
async function getLighthouseResults(url, gitMessage) {
  console.log('Getting report for ' + url);
  // Initiate headless browser session and run Lighthouse for the specified URL
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']}); // Todo: Add incognito flag
  const options = {
    logLevel: 'silent', 
    output: 'html', 
    maxWaitForLoad: 10000, 
    port: chrome.port, 
    // extraHeaders: {
    //   Authorization: '/*insert text for potential auth qualifications*/'
    // }
  };
  const runnerResult = await lighthouse(url, options, CONFIG);

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


async function generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMessage, fullView, lastResult) {
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
  let oldestRun;
  if (data["run-list"].length > 10) oldestRun = data["run-list"].shift();
  // Parse through lhr and handle its current contents
  data["run-list"].push(snapshotTimestamp);
  data["run-list"] = Array.from(new Set(data["run-list"]));
  data["endpoints"].push(endpoint);
  data["endpoints"] = Array.from(new Set(data["endpoints"]));
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
        delete data[resultType][item]['scoreDisplayMode'];
        
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
    installHooks();
    initialize();
    getRoutes();
    console.log(ENDPOINTS);
    await startServer();
    const snapshotTimestamp = new Date().toISOString();
    const commitMsg = execSync("git log -1 --pretty=%B").toString().trim();
    for (const endpoint of ENDPOINTS) {
      const lhr = await getLighthouseResults(`http://localhost:${3000}${endpoint}`);
      await generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMsg, FULL_VIEW, endpoint === ENDPOINTS[ENDPOINTS.length - 1]);
    }
  } catch(err) {
    console.log('Vantage was unable to complete for this commit');
    console.log(err);
  }

  console.log('All tests complete');
  process.exit();
}

initiateRefresh();
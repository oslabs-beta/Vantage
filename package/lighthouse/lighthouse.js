// Import files needed for Lighthouse
import lighthouse from 'lighthouse';
import fs from 'fs';
import chromeLauncher from 'chrome-launcher';
import { exec } from 'child_process';
import { useDebugValue } from 'react';

// Command line process:  "npm run dev" to launch the app -> "npm run lighthouse" to generate the report

// To do: Make these fields configurable during project setup
const PROJECT_FOLDER = '/Users/michaelnoah/Codesmith-Dev/my-test-app/';
const SERVER_COMMAND = 'npm run dev';
const PORT = '3000'
const DATA_STORE = './data_store.json';

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


async function generateUpdatedDataStore(lhr) {
  // Process returned object based on our defined criteria
  // Get the existing JSON file for this project
  // Update it with new data

  // Load existing JSON file or create new one if not yet present
  let data;
  try {
    let currentData = await fs.readFileSync(DATA_STORE);
    data = JSON.parse(currentData);
  } catch {
    data = {"run-list": [], "web-vitals": {}, "numeric-results": {}, "binary-results": {}, "not-applicable": {}, "informative": {}};
  }
  
  // Parse through lhr and handle its current contents

  data["run-list"].push(lhr['fetchTime']);

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
      let timestamp = lhr['fetchTime'];
      data['web-vitals'][item]['results'] = { [timestamp] : currentResults};
    } else {
    // score, numeric value, display value
      data['web-vitals'][item]['results'][lhr['fetchTime']] = currentResults;
    }
  }



  // Add errors to the object
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

      data[resultType][item]['results'][lhr['fetchTime']] = {'score' : lhr['audits'][item]['score'], 'numericValue' : lhr['audits'][item]['numericValue'], 'displayValue' : lhr['audits'][item]['displayValue'], 'details' : lhr['audits'][item]['details']};
      //data[resultType][item]['results'][lhr['fetchTime']] = {'score' : 'test'};
      
    }
  }



  



  // Update diagnostics section of output object

  // let keys = ['first-contentful-paint', 'largest-contentful-paint', 'first-meaningful-paint', 'speed-index', 'total-blocking-time', 'max-potential-fid', 'cumulative-layout-shift', 'server-response-time', 'interactive', 'user-timings', 'critical-request-chains', 'redirects', 'mainthread-work-breakdown', 'font-display', 'diagnostics', 'network-requests', 'network-rtt', 'metrics', 'performance-budget', 'timing-budget', 'resource-summary'];



  // To Do: Read keys from a stored file instead of hard coded value above
  // try {
  //   let lhrKeys = await fs.readFileSync('./lhr_keys.json');
  //   keys = JSON.parse(lhrKeys);
  // } catch {
  //   keys = [];
  // }
  
  // let newResults = {};
  // // console.log(keys);
  // // for (const key of keys) {
  // //   newResults[key] = lhr['audits'][key];
  // // }

  // data[lhr.fetchTime] = newResults;  // To do:  Update key based on preferred format (e.g. git commit message) 

  // Save output to JSON
  fs.writeFileSync(DATA_STORE, JSON.stringify(data));

}

async function initiateRefresh() {
  await startDevServer();
  // Todo:  Iterate through each possible page to be checked
  let lhr = await getLighthouseResults('http://localhost:3000');
  await generateUpdatedDataStore(lhr);
}

initiateRefresh();
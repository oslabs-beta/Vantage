// Import files needed for Lighthouse
import lighthouse from 'lighthouse';
import fs from 'fs';
import chromeLauncher from 'chrome-launcher';
import { exec } from 'child_process';

// Command line process:  "npm run dev" to launch the app -> "npm run lighthouse" to generate the report

// To do: Make these fields configurable during project setup
const PROJECT_FOLDER = '/Users/michaelnoah/Codesmith-Dev/next-js-app/';
const SERVER_COMMAND = 'npm run dev';
const DATA_STORE = './data_store.json';

// Function to initiate the project's dev server
async function startDevServer() {
  const commands = `cd ${PROJECT_FOLDER} &&
  ${SERVER_COMMAND}`;
  await exec(commands, (err, stdOut, stdErr) => {
    console.log(err, stdOut, stdErr);
  });
  
}

// Function to refresh data
async function runRefresh(url, gitMessage) {

  // To Dos:  
  // Figure out browser configuration for security certificates
  // Research how to run this on sites requiring authentication

  // Initiate headless browser session and run Lighthouse for the specified URL
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
  const runnerResult = await lighthouse(url, options);

  // `.lhr` is the Lighthouse Result as a JS object
  fs.writeFileSync('analysis_results.json', JSON.stringify(runnerResult.lhr));
  console.log('Report is done for', runnerResult.lhr.finalUrl);
  console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

  await chrome.kill();
  return runnerResult.lhr;
}




async function generateUpdatedData(lhr) {
  // Process returned object based on our defined criteria
  // Get the existing JSON file for this project
  // Update it with new data

  // Load existing JSON file
  let currentData = await fs.readFileSync(DATA_STORE);
  let data = JSON.parse(currentData);
  console.log(data);
  // Parse through lhr and handle its current contents
  
  // Save output to JSON
  fs.writeFileSync(DATA_STORE, JSON.stringify(data));

}

// startDevServer();
// let lhr = runRefresh('http://localhost:3000');
generateUpdatedData(' ');  // Update to pass in LHR when ready

// const fs = require('fs');
// const lighthouse = require('lighthouse');
// const chromeLauncher = require('chrome-launcher');

// (async () => {
//   const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
//   const options = {logLevel: 'info', output: 'html', onlyCategories: ['performance'], port: chrome.port};
//   const runnerResult = await lighthouse('https://example.com', options);

//   // `.report` is the HTML report as a string
//   const reportHtml = runnerResult.report;
//   fs.writeFileSync('lhreport.html', reportHtml);

//   // `.lhr` is the Lighthouse Result as a JS object
//   console.log('Report is done for', runnerResult.lhr.finalUrl);
//   console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

//   await chrome.kill();
// })();

// function launchChromeAndRunLighthouse(url, opts, config = null) {
//   return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
//     opts.port = chrome.port;
//     return lighthouse(url, opts, config).then(results => {
//       return chrome.kill().then(() => results.lhr)
//     });
//   });
// }

// const lighthouseOptions = {
//   extends: 'lighthouse:default',
//   settings: {
//     onlyCategories: ['accessibility'],
//     emulatedFormFactor:'desktop',
//     output: ['html'],
//   },
// }

// Export
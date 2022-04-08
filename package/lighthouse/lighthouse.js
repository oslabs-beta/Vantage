#!/usr/bin/env node

// Import required dependencies
const lighthouse = require('lighthouse');
const fs = require('fs');
const puppeteer = require('puppeteer');
const { exec, execSync } = require('child_process');
const { resolve } = require('path');
const kill = require('kill-port');
const htmlOutput = require('./html-script');
const regeneratorRuntime = require('regenerator-runtime');

let nextConfig;
try { nextConfig = require(resolve(process.env.INIT_CWD + '/next.config.js')); } catch { nextConfig = {}}

// Define constants to be used throughout various functions
let SERVER_COMMAND, BUILD_COMMAND, PORT, ENDPOINTS, CONFIG, EXTENSIONS, DATA_STORE;
const log = (message) => {
  fs.appendFileSync('./vantage/run_history.log', `\n${message}`);
};


// Initialize all constants based on provided values in the ./vantage/vantage_config.json file.
function initialize() {
  !fs.existsSync('./vantage/') && fs.mkdirSync('./vantage/');
  let configData;
  try {
    const currentData = fs.readFileSync('./vantage/vantage_config.json');
    configData = JSON.parse(currentData);
  } catch {
    configData = {nextAppSettings : {}};
    log(`The config file was not found or the format is incorrect.  Proceeding with default values.`);
  }

  
  PORT = configData.nextAppSettings.port ?? 3500;
  BUILD_COMMAND = configData.nextAppSettings.buildCommand ?? 'npx next build';
  SERVER_COMMAND = configData.nextAppSettings.serverCommand ?? `npx next start -p ${PORT}`;
  ENDPOINTS = configData.nextAppSettings.endpoints ?? [];
  SRC_DIRECTORY = configData.nextAppSettings.srcDirectory ?? false;
  EXTENSIONS = nextConfig.pageExtensions ?? ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'];
  DATA_STORE = nextConfig.dataStore ?? './vantage/data_store.json';

  log(`Parameters for this run: SERVER_COMMAND: ${SERVER_COMMAND}, BUILD_COMMAND: ${BUILD_COMMAND}, PORT: ${PORT}, ENDPOINTS: ${ENDPOINTS.toString()}`);

}

// Build the Next.js project and then start server
async function startServer() {
  await kill(PORT);
  const stdOut = execSync(BUILD_COMMAND, { encoding: 'utf-8' });
  exec(SERVER_COMMAND, (err, stdOut, stdErr) => {
    if (err) throw Error(`Error starting project's server.\nAdditional error details: ${err}`);
  });
}

// Traverse the 'pages' folder in project directory and capture list of endpoints to check
function getRoutes(subfolders = '') {
  let commands = `cd ${SRC_DIRECTORY && `src/`}pages`;
  if (subfolders !== '') commands += ` && cd ${subfolders}`;
  try {
    const stdOut = execSync(`${commands} && ls`, { encoding: 'utf-8' });
    if (stdOut.includes("Not a directory")) throw Error(`Not a directory`);
    if (stdOut.includes("Failed to compile.")) throw Error(`Project failed to compile.`);
    const files = stdOut.split('\n');
    if (!Array.isArray(ENDPOINTS)) ENDPOINTS = [];
    files.map((file) => {
      addFileToList(file, subfolders);
    });
    ENDPOINTS.sort();
  } catch (err) {
    if (!err.message.includes('Not a directory')) throw Error(`Error capturing structure of pages folder. Please ensure your project follows the required structure for the NEXT.js pages folder.`);
  }
}

// Helper function to recursively traverse the pages folder and capture all endpoints
function addFileToList(file, subfolders) {
  const prefix = subfolders !== '' ? '/' + subfolders + '/' : '/';
  const checkExtensions = (file) => {
    for (const extension of EXTENSIONS) if (file.endsWith('.' + extension)) return ('.' + extension);
    return false;
  };

  const fileType = checkExtensions(file);
  if (fileType && !file.startsWith('_') && file !== ('index' + fileType)) {
    const endpointName = prefix + file.split(fileType)[0];
    if (!ENDPOINTS.includes(endpointName)) {
      ENDPOINTS.push(endpointName); 
    }
  } else if (file === ('index' + fileType)) {
    const endpointName = prefix + '/';
    if (!ENDPOINTS.includes(prefix)) {
      ENDPOINTS.push(prefix); 
    }
  } else if (!fileType && file !== 'api' && file !== '' && !file.endsWith('.json')) {
    getRoutes(subfolders === '' ? file : subfolders + '/' + file);
  }
}

// Initiate a headless Chrome session and check performance of the specified endpoint
async function getLighthouseResultsPuppeteer(url, gitMessage) {
  
  const chrome = await puppeteer.launch({args: ['--remote-debugging-port=9222'],});
  const options = {
    logLevel: 'silent', 
    output: 'html', 
    maxWaitForLoad: 10000, 
    port: 9222
  };
  const runnerResult = await lighthouse(url, options, CONFIG);
  await chrome.close();
  return runnerResult.lhr;
}

// Process the returned lighthouse object and update JSON file with new data
async function generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMessage, lastResult, dataStore) {
  // Load existing JSON file or create new one if not yet present
  let data;
  
  try {
    const currentData = await fs.readFileSync(dataStore);
    data = JSON.parse(currentData);
  } catch {
    data = {"run-list": [], "endpoints":[], "commits":{}, "overall-scores": {}, "web-vitals": {}};
  }

  // If more than 10 runs are present, store the oldest timestamp for use during delete lines below
  let oldestRun;
  if (data["run-list"].length > 10) {
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

  
  // Update audit results within the object
  const webVitals = new Set(['first-contentful-paint', 'speed-index', 'largest-contentful-paint', 'interactive', 'total-blocking-time', 'cumulative-layout-shift']);
  
  for (const category of Object.keys(lhr['categories'])) {
    const refs = lhr['categories'][category]['auditRefs'];
    const keys = [];
    refs.map((ref) => keys.push(ref.id));
    for (const item of keys) {
      const thisItem = {};
      Object.assign(thisItem, lhr['audits'][item]);
      const currentResults = {'scoreDisplayMode' : thisItem['scoreDisplayMode'], 'score' : thisItem['score'], 'numericValue' : thisItem['numericValue'], 'displayValue' : thisItem['displayValue']};
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
        data[resultType][item]['results'] = { [endpoint] : {[snapshotTimestamp]: {...currentResults}}};


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
  fs.writeFileSync(dataStore, JSON.stringify(data));
}

// Primary function to step through all parts of refresh and data collection process
async function initiateRefresh() {
  
  try {
    const snapshotTimestamp = new Date().toISOString();
    const commitMsg = execSync("git log -1 --pretty=%B").toString().trim();

    initialize();
    log(`>>> New run for commit '${commitMsg}' at ${snapshotTimestamp}`);

    getRoutes();
    await startServer();
    log('Endpoints tested: ' + ENDPOINTS);
    for (const endpoint of ENDPOINTS) {
      const lhr = await getLighthouseResultsPuppeteer(`http://localhost:${PORT}${endpoint}`);
      await generateUpdatedDataStore(lhr, snapshotTimestamp, endpoint, commitMsg, endpoint === ENDPOINTS[ENDPOINTS.length - 1], DATA_STORE);
    }
    htmlOutput();
    log('Tests completed');
  } catch(err) {
    log('Vantage was unable to complete for this commit');
    log(err.stack);
  } 
  await kill(PORT);
  log('>>> PROCESS EXITING');
  process.exit(0);
}

if (process.env.NODE_ENV !== 'testing') initiateRefresh();

module.exports = {generateUpdatedDataStore, initiateRefresh};
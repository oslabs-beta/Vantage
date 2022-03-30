#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var injectHTML = require('node-inject-html').injectHTML;

// Inject JSON into the blank bundled HTML report
function htmlFileOutput() {
  const htmlTest = fs.readFileSync('./node_modules/vantage-next/dist/index.html').toString();
  const VANTAGE_JSON = fs.readFileSync('./vantage/data_store.json').toString();
  const htmlInject = `<script>window.__VANTAGE_JSON__ = ${VANTAGE_JSON}</script>`;
  const newHtml = injectHTML(htmlTest, {headStart: htmlInject});
  fs.writeFileSync(path.resolve('./vantage/vantage_report.html'), newHtml);
}

module.exports = htmlFileOutput;
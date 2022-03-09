#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var injectHTML = require('node-inject-html').injectHTML;

const htmlTest = fs.readFileSync('../../dist/index.html');
// const VANTAGE_JSON = fs.readFileSync('../')

const htmlInject = `
<script>
  window.__VANTAGE_JSON__ = {"data": "this is a test"}
</script>
`;

const newHtml = injectHTML(htmlTest, {bodyStart: htmlInject});

console.log(newHtml);



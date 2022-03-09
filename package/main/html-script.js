#!/usr/bin/env node

var path = require('path');
var fs = require('fs');
var injectHTML = require('node-inject-html').injectHTML;

const htmlTest = fs.readFileSync(path.resolve('./dist/index.html')).toString();
const VANTAGE_JSON = fs.readFileSync(path.resolve('./data_store_sample.json')).toString();

const htmlInject = `<script>window.__VANTAGE_JSON__ = ${VANTAGE_JSON}</script>`;

const newHtml = injectHTML(htmlTest, {bodyStart: htmlInject});

fs.writeFileSync(path.resolve('./dist/index.html'), newHtml);




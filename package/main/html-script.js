#!/usr/bin/env node

var path = require('path');
var fs = require('fs');

const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Document</title><script defer="defer" src=${path.resolve(__dirname, '../../dist/bundle.js')}></script></head><body><h1>Hello World</h1><div id="root"></div></body></html>`;

fs.writeFileSync(path.resolve(__dirname,'../../dist/index.html'),html);
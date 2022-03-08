#!/usr/bin/env node

var cp = require('child_process');
var path = require('path');
cp.execSync('open ' + path.join(__dirname, '../../dist/index.html'));
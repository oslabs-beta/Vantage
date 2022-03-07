#!/usr/bin/env node
var childProcess = require("child_process");

//Get commit message
const commitMsg = childProcess
  .execSync("git log -1 --pretty=%B")
  .toString()
  .trim();
console.log(commitMsg);

//execute frosty with message
childProcess.exec("frosty");
process.exit(1);

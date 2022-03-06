#!/usr/bin/env node

import chalk from "chalk";
import { createSpinner } from "nanospinner";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";
import shell from 'shelljs'

// console.log('hello')
// shell.exec("echo shell.exec works");
shell.exec("git add -A . && git commit -a -m 'gh-pages update'");
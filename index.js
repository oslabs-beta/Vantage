#!/usr/bin/env node

import chalk from "chalk";
import { createSpinner } from "nanospinner";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import fs from "fs";
import path from "path";

// Get file directory
// import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const currentDir = path.resolve(process.argv[1], "../../../");
// const frostyjsDir = path.join(currentDir, "/frostyjs");
const frostyjsDir = path.resolve('./frostyjs')

const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

async function test() {
  console.log(chalk.bgGreen("hi there!"));
  await sleep();
}

async function askRunFrosty() {
  const answers = await inquirer.prompt({
    name: "question_1",
    type: "confirm",
    message: "Would you like to run your page through frosty?\n",
  });

  // console.log(typeof answers.question_1);
  if (answers.question_1) {
    return handleFrosty(process.argv[2]);
  } else console.log(chalk.red("frosty exited"));
}

async function loading(success) {
  const spinner = createSpinner("Calculating web vitals").start();
  await sleep();
  if (success) {
    spinner.success({});
  }
}

async function handleFrosty(success) {
  const spinner = createSpinner("Calculating web vitals").start();
  await sleep();
  if (success !== "-n") {
    spinner.success({
      text: `Frosty successful! run ${chalk.green(
        "frosty analytics"
      )} to see your web vitals`,
    });
    process.exit(1);
  } else {
    spinner.error({
      text: `Frosty failed! try again with ${chalk.red("npx frostyjs")}`,
    });
  }
}

function writeJSON() {
  if (!fs.existsSync(frostyjsDir)) {
    fs.mkdirSync(frostyjsDir);
  }
  fs.appendFile(frostyjsDir + "/data.json", "{}", (err) => {
    if (err) console.log(err);
  });
}

// await test();
writeJSON();
console.log(frostyjsDir)
// askRunFrosty();

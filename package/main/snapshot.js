// #!/usr/bin/env node

// import chalk from 'chalk';
// import { createSpinner } from 'nanospinner';
// import inquirer from 'inquirer';
// import chalkAnimation from 'chalk-animation';

// const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

// async function test() {
//   console.log(chalk.bgGreen('hi there!'));
//   await sleep();
// }

// async function askRunFrosty() {
//   const answers = await inquirer.prompt({
//     name: 'question_1',
//     type: 'confirm',
//     message: 'Would you like to run your page through frosty?\n',
//   });

//   // console.log(typeof answers.question_1);
//   if (answers.question_1) {
//     return handleFrosty(answers.question_1);
//   } else console.log(chalk.red('frosty exited'));
// }

// async function loading(success) {
//   const spinner = createSpinner('Calculating web vitals').start();
//   await sleep();
//   if (success) {
//     spinner.success({});
//   }
// }

// async function handleFrosty(success) {
//   const spinner = createSpinner('Calculating web vitals').start();
//   await sleep();
//   if (success) {
//     spinner.success({
//       text: `Frosty successful! run ${chalk.green(
//         'frosty analytics'
//       )} to see your web vitals`,
//     });
//     process.exit(1);
//   } else {
//     spinner.error({});
//   }
// }

// // await test();
// // await askRunFrosty();

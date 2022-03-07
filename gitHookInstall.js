import fs from "fs";
import { resolve } from "path";
import chalk from "chalk";

const hook = "post-commit";
//Get files of hook template
const hookFileContents = fs.readFileSync(`./${hook}`).toString();

function installHooks() {
  //Make sure there is a .git folder
  const gitRoot = resolve(process.cwd() + "/.git");
  if (fs.existsSync(gitRoot)) {
    const hooksDir = resolve(gitRoot, "hooks");
    ensureDirExists(hooksDir); //Add hooks folder if it doesn't exist
    const hookFile = resolve(hooksDir, hook);
    if (fs.existsSync(hookFile)) {
      console.warn(
        chalk.red(
          "Post-commit git hook already exists.\nRefer to [online docs] about adding Frosty commit integration"
        )
      );
      return;
    }
    fs.writeFileSync(hookFile, hookFileContents); //create hook file
    fs.chmodSync(hookFile, "755"); //make hook file executable
    console.log(chalk.green("Frosty git integration was successful!"));
  } else {
    console.warn("This does not seem to be a git project.");
  }
}

function ensureDirExists(dir) {
  fs.existsSync(dir) || fs.mkdirSync(dir);
}

installHooks();

# Vantage
NEXTjs SEO optimization and monitoring tool

## Configure a Project
* Add the following in your project's root directory:
  * vantage_config.json - edit build and start commands to match your project's commands
* To initiate a project, run ```npx snapshot```. This will run the first snapshot and add the command to the git post-commit hook
  * If you have an existing post-commit hook file, add ```npx snapshot >&- 2>&- &``` to the file
* for testing, run ```sudo npm link ../vantage``` (or project directory location) then ```npm install``` to link the vantage-next package to the project
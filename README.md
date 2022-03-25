# Vantage
NEXTjs SEO optimization and monitoring tool

## Configure a Project
* Add the following in your project's root directory:
  * vantage_config.json - edit build and start commands to match your project's commands
* To initiate a project, run ```npx snapshot```. This will run the first snapshot and add the command to the git post-commit hook
  * If you have an existing post-commit hook file, add ```npx snapshot >&- 2>&- &``` to the file
* for testing, run ```sudo npm link ../vantage``` (or project directory location) then ```npm install``` to link the vantage-next package to the project

* If you specify your own custom server command to avoid conflicts with other ports being used for testing, then the ```PORT``` value should match the port that your server runs on.
* If you do not specify a custom server command, then your server will start on the provided ```PORT``` value.  3500 will be used by default.
* If your project has custom page extensions set in next.config.js, these will be used to detect the page extensions that are compatible with next.js
const { defineConfig } = require('cypress');
const fs = require('fs-extra');

module.exports = defineConfig({
  defaultCommandTimeout: 70000,
  responseTimeout: 90000,
  requestTimeout: 90000,

  e2e: {
    setupNodeEvents(on, config) {
      // local-config.json should be a .gitignored file only to be used locally to determine what and where to run stuff on your local machine
      // when this file is gitignored, the pipeline will fail the if condition and resort to the 'else', using the variables set in the Cypress config
      // the values set in the Cypress config are found in the cypress-template.yml

      if (fs.existsSync('./local-config.json')) {
        const localConfig = require('./local-config.json');

        return fs.readJson(
          `cypress/config/${localConfig.selectedSuiteName}/${localConfig.selectedSuiteEnv}-env.json`
        );
      } else {
        return fs.readJson(
          `cypress/config/${config.env.selectedSuiteName}/${selectedSuiteEnv}-env.json`
        );
      }
    },
  },
});

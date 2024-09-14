const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl:"https://opensource-demo.orangehrmlive.com/",
    defaultCommandTimeout: 20000,
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      config.specPattern = [
        'cypress/e2e/orangehrm.cy.js', 
      ]
      return config;
    },
  },
});

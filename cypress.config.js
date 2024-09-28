const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder:"cypress/reports/mochareports/assets",
  projectId: 'zoivxh',
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": true,
      "json": true
    }
  },
  e2e: {
    baseUrl: "https://react-redux.realworld.io/"
  },
});

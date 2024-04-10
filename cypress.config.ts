import { defineConfig } from 'cypress';

export default defineConfig({
  includeShadowDom: true,
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotsFolder: 'cypress/reports/screenshots',
  defaultCommandTimeout: 10000,
  reporterOptions: {
    charts: true,
    reportPageTitle: ' Front-End QA Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    reportDir: 'cypress/reports',
    toConsole: true,
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
    env: {
      MAILOSAUR_API_KEY: 'SdVtflk2uqcGQA8z',
      access: '',
      user: '',
      userState: '',
      USERNAME: 'user',
      PASSWORD: 'password123',

      //Location for Grep Executions
      grepFilterSpecs: true,
      grepOmitFiltered: true,
      grepIntegrationFolder: '../../'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('@cypress/grep/src/plugin')(config)
      //config.specPattern[]
    },

    //TO Run Specific file

    // specPattern: [
    //   'cypress/e2e/login.cy.ts'
    // ],
  },
});

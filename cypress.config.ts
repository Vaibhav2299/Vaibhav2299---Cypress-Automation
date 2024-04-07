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
    baseUrl: 'https://www.amazon.com/',
    env: {
      MAILOSAUR_API_KEY: 'SdVtflk2uqcGQA8z',
      access: '',
      user: '',
      userState: '',
      USERNAME: 'user',
      PASSWORD: 'password123',
      BackendAPIUrl: 'https://www.amazon.com/',
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
    // specPattern: [
    //   'cypress/e2e/login.cy.ts',
    //   'cypress/e2e/company.cy.ts',
    //   'cypress/e2e/companybenefits.cy.ts',
    //   'cypress/e2e/companylocations.cy.ts',
    //   'cypress/e2e/companymanagers.cy.ts',
    //   'cypress/e2e/companytype.cy.ts',
    //   'cypress/e2e/client.cy.ts',
    //   'cypress/e2e/clientaccount.cy.ts',
    //   'cypress/e2e/clientar.cy.ts' ,
    //   'cypress/e2e/clientcontacts.cy.ts',
    //   'cypress/e2e/clientdocuments.cy.ts',
    //   'cypress/e2e/clientlegal.cy.ts' ,
    //   'cypress/e2e/clientlocations.cy.ts',
    //   'cypress/e2e/clientnotes.cy.ts',
    //   'cypress/e2e/vendor.cy.ts',
    //   'cypress/e2e/vendorap.cy.ts',
    //   'cypress/e2e/vendorcontacts.cy.ts',
    //   'cypress/e2e/vendordocuments.cy.ts',
    //   'cypress/e2e/vendorlegal.cy.ts',
    //   'cypress/e2e/vendornotes.cy.ts',
    //   'cypress/e2e/vendorpeople.cy.ts',
    //   'cypress/e2e/vendorsow.cy.ts',
    //   'cypress/e2e/personbenefits.cy.ts',
    //   'cypress/e2e/personclientassignment.cy.ts',
    //   'cypress/e2e/personevents.cy.ts',
    //   'cypress/e2e/personhrnotes.cy.ts',
    //   'cypress/e2e/personnotes.cy.ts',
    //   'cypress/e2e/personworkauthimmig.cy.ts',
    //   'cypress/e2e/securityroles.cy.ts'
    // ],
  },
});

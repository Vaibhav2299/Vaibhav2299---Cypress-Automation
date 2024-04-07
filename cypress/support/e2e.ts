// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:



//CANDIDATE COMMANDS HERE
import './candidates/candidatelistcommands';

// Alternatively you can use CommonJS syntax:
// require('./commands')
// import addContext from 'mochawesome/addContext';
import 'cypress-mochawesome-reporter/register';
import './commands';
require('@cypress/skip-test/support');
// import 'cypress-if';
import 'cypress-real-events';

// Cypress.on('test:after:run', (test, runnable) => {
//   if (test.state === 'failed') {
//     const screenshot = `assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png`;
//     addContext({ test }, screenshot);
//   }
// });

const registerCypressGrep = require('@cypress/grep')
registerCypressGrep()

Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});
const chaiSorted = require('chai-sorted');
chai.use(chaiSorted);

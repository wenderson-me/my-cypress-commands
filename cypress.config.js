const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e:  {
    baseUrl: 'https://juice-shop.herokuapp.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
    },
  },
})

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // Add the allureWriter here
      allureWriter(on, config);

      // Other Cypress configuration options...
      // For example, you can set your browsers, specs, etc.
      // config.browsers = ['chrome'];
      // config.specs = ['./path/to/specs/*.js'];

      return config;
    },
  },
};

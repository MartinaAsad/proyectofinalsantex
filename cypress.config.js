const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: 2,
  chromeWebSecurity: false, 
  e2e: {
    defaultCommandTimeout: 2000, // 2 segundos
    video: true, 
    screenshotOnRunFailure: true, 
    videosFolder: 'cypress/videos', 
    screenshotsFolder: 'cypress/screenshots', 
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
  },
});

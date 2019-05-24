exports.config = {
  tests: './__tests__/e2e/*_test.js',
  helpers: {
    Puppeteer: {
      url: 'http://0.0.0.0:4000',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'frontend'
}

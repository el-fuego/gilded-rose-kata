module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
      './src/gilded_rose.js',
      './spec/*.js'
    ],
    singleRun: true
  })
}

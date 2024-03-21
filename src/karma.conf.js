module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'app/**/*.js',
        'test/**/*.js'
      ],
      exclude: [
      ],
      preprocessors: {
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Edge'],
      singleRun: false,
      concurrency: Infinity,
      plugins: [
             require('@chiragrupani/karma-chromium-edge-launcher'),
            ]
    })
  }
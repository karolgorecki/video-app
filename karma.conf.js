var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['src/**/*-test.js'],
    preprocessors: {
      'src/**/*-test.js': ['webpack', 'sourcemap']
    },
    autoWatch: false,
    // logLevel: config.LOG_DISABLE,
    reporters: ['mocha', 'coverage'],
    webpack: {
      externals: {
        'cheerio': 'window',
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      devtool: 'inline-source-map',
      resolve: {
        modulesDirectories: [
          'node_modules',
          'src'
        ],
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
          { test: /\.(jpg|svg)$/, loader: 'url-loader?limit=10000', exclude: /node_modules/},
          { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
        ],
        preLoaders: [
          {
            test: /\.js$/,
            loader: 'isparta',
            exclude: [/node_modules/, /src\/__tests__/]
          }
        ]
      }
    },
    webpackServer: {
      noInfo: true
    },
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    }
  })
}

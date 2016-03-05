// WEBPACK BASE CONFIG
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, '../src/'),
  entry: './index',
  output: {
    filename: 'bundle.js',
    path: path.resolve('build/'),
    publicPath: '/build/'
  },
  module: {
      loaders: []
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ],
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ]
};

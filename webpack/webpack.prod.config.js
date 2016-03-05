// Get the common config
var webpack = require('webpack');
var config = require('./webpack.config.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var loaders = { test: /\.jsx?$/, exclude: [/node_modules/], loaders: ['babel-loader']};
var x = new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production')}});
config.plugins.push(x);
var cssLoader = { test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style-loader','css?minimize&modules&importLoaders=1&localIdentName=[local]_[hash:base64:10]!autoprefixer?browsers=last 2 version!sass?outputStyle=compressed') };
config.devServer = {contentBase: 'src'};

config.module.loaders.push(cssLoader);
config.module.loaders.push(loaders);
module.exports = config;

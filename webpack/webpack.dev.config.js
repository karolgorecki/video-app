var config = require('./webpack.config.js');
var cssLoader = { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' };
var loaders = { test: /\.jsx?$/, exclude: [/node_modules/], loaders: ['react-hot','babel-loader','eslint-loader']};
config.module.loaders.push(cssLoader);
config.module.loaders.push(loaders);
config.devServer = {contentBase: 'src'};
module.exports = config;

#!/usr/bin/env node
var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

// See what file we are running
// First arg is node, second is this script, third is user-provided
var filename = process.argv[2];
if (!filename) {
  filename = 'index.js';
}
var entry = path.resolve(process.cwd(), filename);

var templateContent = ('<!DOCTYPE html>\n' +
'<html>\n' +
'  <head>\n' +
'    <meta charset="UTF-8">\n' +
'    <title>TITLE</title>\n' +
'  </head>\n' +
'  <body>\n' +
'  <div id="root"></div></body>\n' +
'</html>');
templateContent = templateContent.replace(/TITLE/, 'react-run ' + filename);

var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
  entry: entry,
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        },
      }],
  },
  plugins: [new HtmlWebpackPlugin({
    templateContent: templateContent,
  })],
};

var compiler = webpack(config);
var options = {
  quiet: false,
  noInfo: false,
  stats: {
    assets: false,
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false,
    chunkModules: false,
  },
};
var server = new WebpackDevServer(compiler, options);

var port = 8080;
server.listen(port, function(error) {
  console.log('running ' + filename + ' at http://localhost:' + port);
});

#!/usr/bin/env node
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var config = {
  entry: './shim.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      }
    ]
  },
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
  console.log('running at http://localhost:' + port);
});

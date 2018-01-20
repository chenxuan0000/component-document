var webpack = require('webpack');
var config = require('./webpack.base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var fs = require('fs');

config.devtool = '#source-map';
config.output.publicPath = '/';
config.output.filename = '[name].js';
config.output.chunkFilename = '[name].chunk.js';
config.devServer = {
  historyApiFallback: true,
  overlay: true,
  host: '127.0.0.1',
  watchOptions: {
    ignored: /node_modules/
  },
  port: 8989
}

config.plugins = (config.plugins || []).concat([
  new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendors',
    filename: 'vendors.js'
  }),
  new HtmlWebpackPlugin({
    filename: './index.html',
    template: './src/template/index.ejs',
    inject: false
  })
]);

module.exports = config;
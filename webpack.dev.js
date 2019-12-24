const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.js');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    clientLogLevel: 'error',
    port: 3474,
    hot: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      DEBUG: true
    }),
    new WebpackNotifierPlugin({
      title: 'Webpack',
      excludeWarnings: false,
      alwaysNotify: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
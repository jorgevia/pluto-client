const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
    client: {
      logging: 'info',
      overlay: true
    }
  },
  stats: {
    errorDetails: true
  }
});

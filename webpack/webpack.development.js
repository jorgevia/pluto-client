const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
    client: {
      logging: 'info',
      overlay: false
    }
  },
  stats: {
    errorDetails: true
  }
});

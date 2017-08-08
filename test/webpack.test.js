const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        enforce: "pre",
        exclude: [
          path.resolve('src/'),
          path.resolve('node_modules/')
        ],
        use: ['babel-loader'],
      },
      {
        test: /\.jsx?$/i,
        enforce: "pre",
        include: path.resolve('src/'),
        use: ['isparta-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css', '.vue'],
  },
}
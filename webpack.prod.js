const {merge} = require('webpack-merge');
const common = require('./webpack.common');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  node: 'none',
  entry: './src',
  output: {
    filename: '[name].bundle.js',
    path: path.reverse(__dirname, 'dist'),
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.json'],
  },
  module: {
    rules: [
      {test: /\.ts/, loader: 'ts-loader'},
    ],
  },
  plugin: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};

const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = {
  mode: 'production',
  target: 'node',
  optimization: {
    nodeEnv: false
  },
  node: {
    __dirname: false,
    __filename: false
  },
  entry: './src/no-babel/index.js',
  output: {
    path: path.join(__dirname, 'dist-no-babel'),
    filename: 'index.js'
  },
  externals: [nodeExternals()],

  devtool: 'source-map'
};

module.exports = config;

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
  entry: './src/with-babel/index.js',
  output: {
    path: path.join(__dirname, 'dist-with-babel'),
    filename: 'index.js'
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['latest-node', { target: '10', modules: false }]]
          }
        }
      }
    ]
  },
  devtool: 'source-map'
};

module.exports = config;

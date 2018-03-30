const path = require('path');
const packageName = require('../package.json').name;
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'production',

  entry: {
    index: './src/index.jsx',
  },

  output: {
    path: path.resolve(__dirname, '../lib'),
    filename: '[name].js',
    library: packageName,
    libraryTarget: 'umd',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          }
        ]
      }
    ]
  },

  optimization: {
    minimize: false
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  externals: [nodeExternals()],
};
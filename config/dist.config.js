const path = require('path');
const packageName = require('../package.json').name;

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

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      },
      'react-router': {
        root: 'ReactRouter',
        commonjs2: 'react-router',
        commonjs: 'react-router',
        amd: 'react-router'
      }
    },
  ],
};
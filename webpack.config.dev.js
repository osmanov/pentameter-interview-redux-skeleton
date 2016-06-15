var path = require('path');
var webpack = require('webpack');

var autoprefixer = require('autoprefixer');
var nested = require('postcss-nested');
var vars = require('postcss-simple-vars');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    modulesDirectories: [
      'node_modules',
      'src'
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss'
        ]
      },
      {
      test: /\.json$/,
      loaders: ['json'],
      include: path.join(__dirname, 'src')
    },

    ]
  },
  postcss: [
    autoprefixer(),
    nested(),
    vars()
  ]
};

// make sure to import this
var webpack = require('webpack');

/**
 * Export config for webpack
 * @type {
 *  {
 *    entry: string,
 *    output: {
 *      path: string,
 *      filename: string,
 *      publicPath: string
 *    },
 *    plugins: *,
 *    module: {
 *      loaders: *[]
 *    }
 *  }
 *}
 */
module.exports = {
  
  entry: './index.js',

  output: {
    path: 'public',
    filename: 'bundle.js',
    publicPath: ''
  },

  plugins: process.env.NODE_ENV === 'production' ? [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ] : [],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
};


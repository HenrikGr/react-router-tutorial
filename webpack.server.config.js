/*
 * Description:
 *
 * Node.js do not understand JSX sp we need a way to compile the code
 * on the server in order to use server rendering via renderToString function in React
 *
 * Webpack will build a server bundle, in the same way as we do for the client
 *
 * Author:  Henrik
 * File:    
 * Version: 0.0.1
 *
 * Created on 2016-03-18
 */
var fs = require('fs');
var path = require('path');

module.exports = {

  entry: path.resolve(__dirname, 'server.js'),

  output: {
    filename: 'server.bundle.js'
  },

  target: 'node',

  // keep node_module paths out of the bundle
  externals: fs.readdirSync(path.resolve(__dirname, 'node_modules')).concat([
    'react-dom/server'
  ]).reduce(function (ext, mod) {
    ext[mod] = 'commonjs ' + mod;
    return ext
  }, {}),

  node: {
    __filename: true,
    __dirname: true
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }

};
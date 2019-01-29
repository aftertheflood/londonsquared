const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    libraryTarget: 'var',
    library: 'atf'
  }
};
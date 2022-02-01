const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    publicPath: "/odin-weather/",
    path: path.resolve(__dirname, 'dist'),
  },
};
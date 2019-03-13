
const env = require('yargs').argv.env;

let dev = env === 'development';

module.exports = {
  mode: dev ? 'development' : 'production',
  devtool: dev ? 'source-map' : 'nosources-source-map',
  entry: './src/main/js/neverfloat.js',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }, {
      test: /\.css$/,
      loader: [
        'style-loader',
        'css-loader'
      ],
    }]
  },
  output: {
    filename: 'neverfloat.js'
  }
};

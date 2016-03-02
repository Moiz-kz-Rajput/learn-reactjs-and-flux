const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.js'
  },
  module: {
    loaders: [
      {test: /\.jsx?$/, include: __dirname + '/app', loader: "babel-loader"},
      {test: /\.css$/, include: __dirname + '/app/style.css', loaders: ['style', 'css']}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
};
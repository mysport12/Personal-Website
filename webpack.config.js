const path = require('path');

const config = {
  entry: '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: '/lib'
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.(js|jsx)$/, use: {
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['env']
        }
      }}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};

module.exports = config;

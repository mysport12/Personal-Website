const path = require('path');

const config = {
  entry: '/src/app.js',
  output: {
    filename: 'bundle.js',
    path: '/build'
  },
  module: {
    rules: [
      {test: /\.css$/, use: 'css-loader'},
      {test: /\.(js|jsx)$/, use: 'babel-loader',
        options: {
          presets: ['env']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: 'index.html'})
  ]
};

module.exports = config;

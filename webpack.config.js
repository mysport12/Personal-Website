const path = require('path');

const config = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, '/lib'),
    filename: 'bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, "css"), "node_modules"]
  },

  plugins: [
  ]
};

module.exports = config;

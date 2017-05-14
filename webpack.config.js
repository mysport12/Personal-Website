const path = require('path');

const config = {

  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'lib'),
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
      },
      {
        test: /\.php$/,
        use: [
          {
            loader: 'php-loader',
            options: {
              modules: true
            }
          }
        ]
      },
    ]
  },

  resolve: {
    modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, "css"), path.resolve(__dirname, "php"), "node_modules"]
  },

  plugins: [
  ]
};

module.exports = config;

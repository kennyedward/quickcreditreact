const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'index.js'
  },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            "style-loader", "css-loader"
          ]
        }
      ]
    },
    mode: "development",
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ]
  };

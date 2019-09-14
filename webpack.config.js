const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'index.js',
    publicPath: '/'
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
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: [
            "style-loader", "css-loader", "sass-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: 'svg-inline-loader?classPrefix'
        }
      ]
    },
    mode: "development",
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "public/index.html"
      })
    ]
  };

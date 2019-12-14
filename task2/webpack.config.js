const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlReplaceWebpackPlugin = require('html-replace-webpack-plugin');
module.exports = {
  entry: {
    app: './src/script.js',
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, './build')
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        test: /\.css$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: { sourceMap: true }
        }, {
          loader: 'postcss-loader',
          options: { sourceMap: true, config: { path: 'postcss.config.js' } }
        }]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
    new HtmlWebpackPlugin({
      inject: true,
      hash: false,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new HtmlReplaceWebpackPlugin([{
        pattern: '<link rel="stylesheet" href="style.css">',
        replacement: ''
      },
      {
        pattern: '<script src="script.js"></script>',
        replacement: ''
      }
    ])
  ]
}
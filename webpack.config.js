const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    login: './src/login.js',
    homepage: './src/homepage.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },

  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,

  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: {
      rewrites: [{ from: /^\/$/, to: '/login.html' }],
    },
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Login',
      filename: 'login.html',
      template: './src/login.html',
      chunks: ['login'],
    }),
    new HtmlWebpackPlugin({
      title: 'Homepage',
      filename: 'homepage.html',
      template: './src/homepage.html',
      chunks: ['homepage'],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

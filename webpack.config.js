const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const autoprefixer = require('autoprefixer');
const postcssInitial = require('postcss-initial');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '',
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.?scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName:
                  '[name]__[local]__[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
          },
          { loader: 'resolve-url-loader' },
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                autoprefixer(),
                postcssInitial({
                  reset: 'inherited',
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader:
          'url-loader?limit=8000&name=images/[name].[ext]',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
};

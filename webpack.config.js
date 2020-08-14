const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const fs = require("fs");

const autoprefixer = require("autoprefixer");
const postcssInitial = require("postcss-initial");
const postcssNesting = require("postcss-nesting");
const postcssMixins = require("postcss-mixins");
const postcssSimpleVars = require("postcss-simple-vars");
const postcssImport = require("postcss-import");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  watch: true,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "",
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.?css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: "[name]__[local]__[hash:base64:5]",
              },
            },
          },
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [
                postcssImport({
                  path: ["src/style"],
                }),
                autoprefixer(),
                postcssInitial({
                  reset: "inherited",
                }),
                postcssMixins(),
                postcssNesting(),
                postcssSimpleVars({
                  silent: true,
                  variables: () => require("./src/config/vars"),
                  onVariables: (v) => {
                    console.log("css vars");
                    console.log(JSON.stringify(v, null, 1));
                  },
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?limit=8000&name=images/[name].[ext]",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/index.html",
      filename: "index.html",
      inject: "body",
    }),
  ],
};

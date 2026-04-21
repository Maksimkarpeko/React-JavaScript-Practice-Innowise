const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  entry: { myAppName: path.resolve(__dirname, "./src/app/index.js") },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: isProduction ? "[name].[contenthash].js" : "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                auto: true,
                namedExport: false,
              },
              sourceMap: !isProduction,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias:{
      "@app": path.resolve(__dirname, "src/app/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@constants": path.resolve(__dirname, "src/constants/"),
      "@modules": path.resolve(__dirname, "src/module/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@shared": path.resolve(__dirname, "src/shared/"),
      "@": path.resolve(__dirname, "src/")
    },
    extensions: ["*", ".js", ".jsx", ".css"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack & React",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
  devServer: {
    port: 3001,
    hot: true,
  },
  mode: isProduction ? "production" : "development",
};

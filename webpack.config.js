// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const resolve = path.resolve;
const src = resolve(__dirname, "src");
const dist = resolve(__dirname, "dist");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const config = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: dist,
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 8083,
    hot:'only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      favicon: "./src/images/favicon/favicon.ico",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, "src"),
      },
      {
        test: /\.s[ac]ss$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset/resource",
        use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
                outputPath: 'images',
        }}],
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
    config.plugins.push(new WorkboxWebpackPlugin.GenerateSW());
  } else {
    config.mode = "development";
  }
  return config;
};

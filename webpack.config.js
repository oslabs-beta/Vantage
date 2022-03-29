/* eslint-disable no-unused-vars */
const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlInlineScriptPlugin = require("html-inline-script-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var fs = require("fs");
var injectHTML = require("node-inject-html").injectHTML;

//Inject sample data into index.html
function htmlFileOutput() {
  const htmlTest = fs.readFileSync("./client/index.html").toString();
  const VANTAGE_JSON = fs
    .readFileSync("./vantage_dev/sampleData.json")
    .toString();
  const htmlInject = `<script>window.__VANTAGE_JSON__ = ${VANTAGE_JSON}</script>`;
  const newHtml = injectHTML(htmlTest, { headStart: htmlInject });
  fs.writeFileSync(path.resolve("./vantage_dev/index.html"), newHtml);
}

//Only use HtmlInlineScriptPlugin for production
const pluginsArr = [new CleanWebpackPlugin()];
if (process.env.NODE_ENV === "production") {
  pluginsArr.push(
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./client/index.html",
    })
  );
  pluginsArr.push(new HtmlInlineScriptPlugin());
  //Inject sample data into index.html in development mode
} else if (process.env.NODE_ENV === "development") {
  htmlFileOutput();
  pluginsArr.push(
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./vantage_dev/index.html",
    })
  );
}

module.exports = {
  entry: [
    // entry point of our app
    "./client/index.js",
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    filename: "bundle.js",
  },
  devtool: "eval-source-map",
  mode: process.env.NODE_ENV,
  devServer: {
    host: "localhost",
    port: 8080,
    // enable HMR on the devServer
    hot: true,
    // fallback to root for other urls
    historyApiFallback: true,

    static: {
      // match the output path
      directory: path.resolve(__dirname, "dist"),
      // match the output 'publicPath'
      publicPath: "/",
    },

    headers: { "Access-Control-Allow-Origin": "*" },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch requests from localhost:8080/api/* (webpack dev server)
     * to localhost:3000/api/* (where our Express server is running)
     */
    // proxy: {
    //   '/api/**': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   },
    //   '/assets/**': {
    //     target: 'http://localhost:3000/',
    //     secure: false,
    //   },
    // },
  },
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /.(css|scss)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: pluginsArr,
  // optimization: {
  //   minimize: false
  // },
  resolve: {
    // Enable importing JS / JSX files without specifying their extension
    extensions: [".js", ".jsx"],
  },
};

// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./public/index.html" }),
    new ModuleFederationPlugin({
      name: "DemoA", // This application named 'HeaderApp'
      filename: "remoteEntry.js", // output a js file
      remotes: {
        DemoB: "DemoB@http://localhost:8081/remoteEntry.js",
        DemoC: "DemoC@http://localhost:8082/remoteEntry.js",
        DemoD: "DemoD@http://localhost:8083/remoteEntry.js",
      },
      shared: {
        // react: {
        //   singleton: true,
        //   eager: true,
        // },
        // "react-dom": {
        //   singleton: true,
        //   eager: true,
        // }
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
};

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { dependencies } = require("./package.json");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    open: { target: '/demob' },
    port: 8081, // Set the port to 8081
    hot: true, // Enable Hot Module Replacement (HMR)
    historyApiFallback: true, // For React Router or client-side routing
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new ModuleFederationPlugin({
      name: "DemoB",
      filename: "remoteEntry.js", // output a js file
      exposes: {
        "./DemoFromBApp": "./src/app.js",
      },
    }),
  ],
};

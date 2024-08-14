const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    path: __dirname + "/dist", // Output directory for the bundled files
    filename: "bundle.js", // Name of the output bundle
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Regex to match JavaScript and JSX files
        exclude: /node_modules/, // Exclude the node_modules directory
        use: {
          loader: "babel-loader", // Use babel-loader to transpile JavaScript files
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // Path to the template HTML file
    }),
  ],
  devServer: {
    static: "./dist", // Directory to serve by webpack-dev-server
  },
};

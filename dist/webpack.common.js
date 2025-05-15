const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Production",
      template: "./src/template.html", // Path to your HTML template
      inject: false,
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // CSS handling
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|mp3|wav)$/i,
        type: "asset/resource", // Handles images
      },
    ],
  },
};

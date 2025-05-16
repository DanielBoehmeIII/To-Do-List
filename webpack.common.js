const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index.js",
  },
  output: {
    filename: "[name].bundle.js", // <-- ✅ This is what you want
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // <-- ✅ CSS handling
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp3|wav)$/i,
        type: "asset/resource", // <-- ✅ images & sounds
        generator: {
          filename: "assets/[hash][ext][query]", // outputs to /assets/
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "To-Do List",
      template: "./src/template.html", // <-- ✅ your template file
      inject: false, // <-- ✅ your explicit choice
    }),
  ],
  resolve: {
    extensions: [".js"],
  },
};

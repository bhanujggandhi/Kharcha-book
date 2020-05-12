const path = require("path");

module.exports = {
  entry: "./src/playground/redux-101.js",
  output: {
    path: path.join(__dirname, "public/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    historyApiFallback: true,
  },
};

console.log(path.join(__dirname, "public/"));

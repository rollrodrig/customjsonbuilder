const path = require("path");
module.exports = {
  entry: "./src/builder.ts",
  target: "web",
  mode: "production", // development
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  output: {
    filename: "builder.frontend.min.js",
    path: path.resolve(__dirname, "dist"),
  },
};

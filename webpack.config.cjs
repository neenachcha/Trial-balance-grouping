const path = require('path');

module.exports = {
  mode: "development",
  watch: true,
  entry: {
    app: path.join(__dirname, "client", "src", "app.jsx"),
  },
  output: {
    filename: "[name].js",
    path:path.resolve(__dirname, "client","dist")
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: [
          {loader : "style-loader"} ,
          {loader : "css-loader"}
        ]
      }
    ]
  }
}
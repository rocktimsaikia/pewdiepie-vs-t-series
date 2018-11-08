const merge = require("webpack-merge");
const common = require("./webpack.common");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("style.css")]
});

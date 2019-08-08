const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.s?css$/,
        loaders: [
          "style-loader",
          "css-loader",
          "sass-loader",
          {
            loader: "sass-resources-loader",
            options: {
              resources: "./src/assets/scss/common.scss",
              include: path.resolve(__dirname, "../")
            }
          }
        ]
      }
    ]
  }
};

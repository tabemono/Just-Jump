const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "src"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};

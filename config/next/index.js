const path = require("path");

const dev = process.env.NODE_ENV !== "production";

module.exports = {
  dev,
  dir: path.resolve(__dirname, "../../src/client"),
  config: require("../../next.config")
};

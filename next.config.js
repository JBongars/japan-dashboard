const uuid = require("uuid/v4");
const withSass = require("@zeit/next-sass");
const compose = require("next-compose");
const path = require("path");

const plugins = [
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 2,
        localIdentName: "[name]__[local]___[hash:base64:5]"
      }
    }
  ],
];

const composedConfig = compose(plugins);

composedConfig.generateBuildId = async () => {
  return uuid();
};

module.exports = composedConfig;

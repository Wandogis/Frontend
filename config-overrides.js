// config-overrides.js
const { addWebpackModuleRule } = require("customize-cra");

module.exports = function override(config, env) {
  config = addWebpackModuleRule({
    test: /\.svg$/,
    use: [
      {
        loader: "@svgr/webpack",
        options: {
          config: {
            plugins: {
              removeViewBox: false,
            },
          },
        },
      },
      "url-loader",
    ],
  })(config, env);

  return config;
};

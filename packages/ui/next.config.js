const path = require("path");
const withTranspileModules = require("next-plugin-transpile-modules");
const withCustomBabelConfigFile = require("next-plugin-custom-babel-config");

module.exports = withCustomBabelConfigFile(
  withTranspileModules({
    transpileModules: ["@expnsr/services"],
    babelConfigFile: path.resolve("../../babel.config.js"),
    env: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      SUPABASE_KEY: process.env.SUPABASE_KEY
    },
    images: {
      domains: ['https://lh3.googleusercontent.com'],
    },
    webpack(config, { isServer }) {
      if (!isServer) {
        config.node = {
          fs: 'empty'
        }
      }
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
  
      return config;
    }
  })
);
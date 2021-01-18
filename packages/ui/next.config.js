module.exports = {
    env: {
      GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
      SUPABASE_KEY: process.env.SUPABASE_KEY
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
  };
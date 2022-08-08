const nextConfig = {
  reactStrictMode: true,

  env: {
    BASE_URL: process.env.BASE_URL,
  },

  webpack5: true,
  
  webpack: function (config, options) {
    if (!options.isServer) {
      config.resolve.fallback.fs = false;
    }
    config.experiments = { asyncWebAssembly: true, layers: true };
    return config;
  },
};

module.exports = nextConfig;

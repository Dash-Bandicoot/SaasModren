const withPlugins = require("next-compose-plugins");

const nextConfig = {
  // distDir: '../../dist/functions/next'
  images: {
    domains: [
      "images.ctfassets.net",
      "imgix.cosmicjs.com",
      "cdn.cosmicjs.com",
      "pbs.twimg.com",
    ],
  },
};

module.exports = withPlugins([], nextConfig);

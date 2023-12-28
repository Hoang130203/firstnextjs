/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js

module.exports = {
    webpack: (config, { dev }) => {
      if (dev) {
        config.devServer = {
          hot: true, // Sử dụng Hot Module Replacement
          port: 3000, // Cổng mặc định
        };
      }
      return config;
    },
  };
  

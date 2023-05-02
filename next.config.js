const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.shopify.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = nextConfig

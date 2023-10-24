/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["edamam-product-images.s3.amazonaws.com"],
  },
};

module.exports = nextConfig;

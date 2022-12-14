/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "mindconnector.com.vn", "www.mindconnector.com.vn"],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 992, 1140, 1920],
    // formats: ["image/avif", "image/webp"],
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig

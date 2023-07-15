/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "be.mindconnector.vn",
        port: "",
        pathname: "/uploads/**",
      },
    ],
    domains: ["localhost", "mindconnector.com.vn", "www.mindconnector.com.vn"],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 992, 1140, 1920],
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;

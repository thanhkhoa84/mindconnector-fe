/** @type {import('next').NextConfig} */

const nextConfig = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
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
        protocol: "https",
        hostname: "be.mindconnector.vn",
        port: "",
        pathname: "/uploads/**",
      },
    ],
    domains: [
      "localhost",
      "mindconnector.com.vn",
      "www.mindconnector.com.vn",
      "be.mindconnector.vn",
    ],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 992, 1140, 1920],
  },
  env: {
    SITE_URL: process.env.SITE_URL,
  },
};

module.exports = nextConfig;

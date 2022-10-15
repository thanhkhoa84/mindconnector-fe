/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "localhost:3000",
      "mindconnector.com.vn",
      "www.mindconnector.com.vn",
    ],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 992, 1140, 1920],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/student": { page: "/student" },
    };
  },
};

module.exports = nextConfig

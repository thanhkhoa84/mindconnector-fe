/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost:3000"],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
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

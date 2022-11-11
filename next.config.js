/** @type {import('next').NextConfig} */
const nextConfig = {
  locales: ["en-US", "vi"],
  // This is the default locale you want to be used when visiting
  // a non-locale prefixed path e.g. `/hello`
  defaultLocale: "vi",
  domains: [
    {
      domain: "mindconnector.com.vn",
      defaultLocale: "vi",
    },
  ],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "mindconnector.com.vn", "www.mindconnector.com.vn"],
    unoptimized: false,
    deviceSizes: [375, 640, 750, 992, 1140, 1920],
    formats: ["image/avif", "image/webp"],
  },
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/student": { page: "/student" },
      "/business": { page: "/business" },
    };
  },
};

module.exports = nextConfig

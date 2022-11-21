const siteUrl = process.env.SITE_URL || "https://mindconnector.com.vn";

module.exports = {
  siteUrl,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    exclude: [],
    additionalSitemaps: [],
  },
};

const siteUrl = process.env.SITE_URL || "https://mindconnector.com.vn";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    exclude: [],
  },
};

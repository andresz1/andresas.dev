/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: process.env.SITE_URL || "https://andresas.dev",
  generateRobotsTxt: true, // (optional)
  // ...other options
};

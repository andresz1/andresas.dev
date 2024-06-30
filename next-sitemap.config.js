const categories = require("./data/categories.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://andresas.dev",
  generateRobotsTxt: true,
  additionalPaths: () => {
    const result = [];

    categories.forEach((category) => {
      result.push({ loc: `/posts/${category.id}` });
    });

    return result;
  },
};

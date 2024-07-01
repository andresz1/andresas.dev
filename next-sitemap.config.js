const categories = require("./src/data/categories.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.andresas.dev",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const result = await Promise.all(
      categories.map((category) => {
        return config.transform(config, `/posts/${category.id}`);
      })
    );

    return result;
  },
};

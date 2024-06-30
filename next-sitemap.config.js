const categories = require("./src/data/categories.json");

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://andresas.dev",
  generateRobotsTxt: true,
  additionalPaths: async () => {
    const result = await Promise.all(
      categories.map(async (category) => {
        result.push(await config.transform(config, `/posts/${category.id}`));
      })
    );

    return result;
  },
};

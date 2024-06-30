import { ServicesFactory } from "./src/services";

const siteUrl = process.env.SITE_URL || "https://andresas.dev";

/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl,
  generateRobotsTxt: true,
  additionalPaths: (config) => {
    const result = [];
    const { categoryService } = ServicesFactory.create();

    const categories = categoryService.fetchAll();

    categories.forEach((category) => {
      result.push({ loc: `/posts/${category.id}` });
    });

    return result;
  },
};

export default config;

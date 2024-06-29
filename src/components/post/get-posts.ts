import { readdir } from "fs/promises";

import { Post } from "@/types/Post";

export const getPosts = async (): Promise<Post[]> => {
  const slugs = (
    await readdir("./src/app/(posts)", { withFileTypes: true })
  ).filter((dirent) => dirent.isDirectory());

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(`../../app/(posts)/${name}/page.mdx`);
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
};

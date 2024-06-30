import { readdir } from "fs/promises";
import { resolve } from "path";

import { Post } from "@/types/Post";

export class PostService {
  async fetchAll(): Promise<Array<Post>> {
    const slugs = (
      await readdir(resolve("src/app/(posts)"), { withFileTypes: true })
    ).filter((dirent) => dirent.isDirectory());

    const posts = await Promise.all(
      slugs.map(async ({ name }) => {
        const { metadata } = await import(`../app/(posts)/${name}/page.mdx`);
        return { slug: name, ...metadata };
      })
    );

    posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

    return posts;
  }

  async fetchAllByCategory({ categoryId }: { categoryId: string }) {
    const posts = await this.fetchAll();

    return posts.filter((post) => post.categories.indexOf(categoryId) !== -1);
  }
}

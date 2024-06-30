import { readdir } from "fs/promises";

import { Category } from "@/types/Category";
import { Post } from "@/types/Post";

export class PostService {
  async fetchAll(): Promise<Array<Post>> {
    const slugs = (
      await readdir("./src/app/(posts)", { withFileTypes: true })
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

  async fetchAllByCategory({ id }: { id: string }) {
    const posts = await this.fetchAll();

    return posts.filter((post) => post.categories.indexOf(id) !== -1);
  }
}

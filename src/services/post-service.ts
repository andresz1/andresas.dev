import { readdir, readFile } from "fs/promises";
import { extname, join } from "path";

import { Post, PostMetadata } from "@/types/Post";

export class PostService {
  parseFrontmatter(fileContent: string) {
    let frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    let match = frontmatterRegex.exec(fileContent);
    let frontMatterBlock = match![1];
    let content = fileContent.replace(frontmatterRegex, "").trim();
    let frontMatterLines = frontMatterBlock.trim().split("\n");
    let metadata: Record<string, any> = {};

    frontMatterLines.forEach((line) => {
      let [key, ...valueArr] = line.split(": ");
      let value = valueArr.join(": ").trim();
      value = value.replace(/^['"](.*)['"]$/, "$1");

      const current = key.trim() as keyof PostMetadata;

      metadata[current] = value;
    });

    return { metadata: metadata as PostMetadata, content };
  }

  async fetchAll(): Promise<Array<Post>> {
    const directory = "posts";
    const slugs = (await readdir(directory)).filter(
      (file) => extname(file) === ".mdx"
    );

    const posts = await Promise.all(
      slugs.map(async (slug) => {
        const { metadata, content } = this.parseFrontmatter(
          await readFile(join(directory, slug), "utf-8")
        );

        return { slug, ...metadata, content } as Post;
      })
    );

    posts.sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));

    return posts;
  }

  async fetchAllByCategory({ categoryId }: { categoryId: string }) {
    const posts = await this.fetchAll();

    return posts.filter((post) => post.categories.indexOf(categoryId) !== -1);
  }
}

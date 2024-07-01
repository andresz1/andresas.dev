export interface PostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  categories: Array<string>;
  image?: string;
}

export interface Post extends PostMetadata {
  slug: string;
  content: string;
}

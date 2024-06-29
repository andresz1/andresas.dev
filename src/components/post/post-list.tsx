import { ComponentPropsWithoutRef } from "react";

import { Post } from "@/types/Post";

import { PostItem } from "./post-item";

export interface PostListProps extends ComponentPropsWithoutRef<"div"> {
  posts: Array<Post>;
}

export const PostList = ({ posts, ...others }: PostListProps) => {
  return (
    <div {...others}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

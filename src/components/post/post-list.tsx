import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/ui/core";
import { Post } from "@/types/Post";

import { PostItem } from "./post-item";

export interface PostListProps extends ComponentPropsWithoutRef<"div"> {
  posts: Array<Post>;
}

export const PostList = ({ posts, className, ...others }: PostListProps) => {
  return (
    <div className={cn("space-y-4", className)} {...others}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { cn } from "@/components/ui/core";
import { Post } from "@/types/Post";

import { Icon } from "../ui/icon";
import { LinkBox, LinkOverlay } from "../ui/link-overlay";

export interface PostItemProps extends ComponentPropsWithoutRef<"article"> {
  post: Post;
}

export const PostItem = ({ post, className, ...others }: PostItemProps) => {
  const { slug, title, publishedAt } = post;

  return (
    <LinkBox asChild>
      <article
        className={cn(
          className,
          "p-4 flex items-center rounded-md border border-muted-foreground hover:shadow-md"
        )}
        {...others}
      >
        <div className="flex-1 space-y-1">
          <h3>
            <LinkOverlay asChild>
              <Link href={`/${slug}`}>{title}</Link>
            </LinkOverlay>
          </h3>

          <p className="text-muted-foreground">
            {new Date(publishedAt).toLocaleDateString()}
          </p>
        </div>

        <Icon className="text-2xl" size="current">
          <ArrowUpRight />
        </Icon>
      </article>
    </LinkBox>
  );
};

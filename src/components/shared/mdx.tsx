import { Copy } from "lucide-react";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ComponentPropsWithoutRef } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { highlight } from "sugar-high";

import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";

interface CodeProps extends ComponentPropsWithoutRef<"code"> {}

const Code = ({ children, className, ...props }: CodeProps) => {
  if (!className) {
    return (
      <code
        className="font-mono text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: children as string }}
        {...props}
      />
    );
  }

  const html = highlight(children as string);

  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};

const components = { code: Code };

export type MDXProps = MDXRemoteProps;

export const MDX = (props: MDXProps) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            rehypeSlug,
            [
              rehypeAutolinkHeadings,
              {
                behavior: "prepend",
                test: ["h2", "h3", "h4", "h5", "h6"],
                properties: { class: "anchor" },
              },
            ],
          ],
        },
      }}
    />
  );
};

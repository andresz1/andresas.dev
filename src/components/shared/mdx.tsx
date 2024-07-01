import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const components = {};

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

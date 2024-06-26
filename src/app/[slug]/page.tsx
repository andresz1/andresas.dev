import { Metadata } from "next";
import { notFound } from "next/navigation";

import { MDX } from "@/components/shared/mdx";
import { Container } from "@/components/ui/container";
import { ServicesFactory } from "@/services";

export interface PostDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: PostDetailPageProps): Promise<Metadata> {
  const { slug } = params;
  const { postService } = ServicesFactory.create();

  const post = (await postService.fetchAll()).find(
    (post) => post.slug === slug
  );

  if (!post) {
    return {};
  }

  const { title, summary: description, publishedAt } = post;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `https://www.andresas.dev/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { postService } = ServicesFactory.create();
  const { slug } = params;

  const post = (await postService.fetchAll()).find(
    (post) => post.slug === slug
  );

  if (!post) {
    notFound();
  }

  return (
    <Container className="prose break-words dark:prose-invert prose-p:leading-relaxed">
      <MDX source={post.content} />
    </Container>
  );
}

export async function generateStaticParams() {
  const { postService } = ServicesFactory.create();
  const posts = await postService.fetchAll();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

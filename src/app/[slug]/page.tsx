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
  const siteURL = process.env.SITE_URL;
  const image = post.image
    ? `${siteURL}${post.image}`
    : `${siteURL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime: publishedAt,
      url: `${siteURL}/${post.slug}`,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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

  const siteURL = process.env.SITE_URL;
  const image = post.image
    ? `${siteURL}${post.image}`
    : `${siteURL}/og?title=${post.title}`;

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            description: post.summary,
            image: image,
            url: `${siteURL}/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Andrés Alvarez",
            },
          }),
        }}
      />

      <Container className="prose break-words dark:prose-invert prose-p:leading-relaxed">
        <MDX source={post.content} />
      </Container>
    </>
  );
}

export async function generateStaticParams() {
  const { postService } = ServicesFactory.create();
  const posts = await postService.fetchAll();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

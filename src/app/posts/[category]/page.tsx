import { Twitter } from "lucide-react";
import { Metadata } from "next";
import { notFound } from "next/navigation";

import { CategoryList } from "@/components/category/category-list";
import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ServicesFactory } from "@/services";

export interface CategoryDetailPageProps {
  params: { category: string };
}

export async function generateMetadata({
  params,
}: CategoryDetailPageProps): Promise<Metadata> {
  const { category: categoryId } = params;
  const { categoryService } = ServicesFactory.create();

  const category = categoryService.fetchOne({ id: categoryId });

  if (!category) {
    return {};
  }

  return {
    title: `Aprende sobre ${category.name}`,
    description: `Aprende sobre ${category.name}, buenas prácticas y mantente actualizado a través de artículos cortos.`,
  };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPageProps) {
  const { category: categoryId } = params;
  const { categoryService, postService } = ServicesFactory.create();

  const category = categoryService.fetchOne({ id: categoryId });
  const categories = categoryService.fetchAll();
  const posts = await postService.fetchAllByCategory({ categoryId });

  if (!category) {
    notFound();
  }

  return (
    <Container className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Aprende {category.name}
          </h1>

          <p className="text-md md:text-lg text-muted-foreground">
            Aprende sobre <strong>{category.name}</strong>, buenas prácticas y
            mantente actualizado a través de <strong>artículos cortos</strong>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <Button size="lg" variant="outline" className="shadow-md" asChild>
            <a href="https://twitter.com/andresz_s" target="_blank">
              <Icon>
                <Twitter />
              </Icon>
              Sígueme
            </a>
          </Button>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Artículos sobre {category.name}
        </h2>

        <PostList posts={posts} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Otras categorías</h2>

        <CategoryList
          categories={categories.filter(
            (current) => current.id !== category.id
          )}
        />
      </section>
    </Container>
  );
}

export function generateStaticParams() {
  const { categoryService } = ServicesFactory.create();
  const categories = categoryService.fetchAll();

  return categories.map((category) => ({
    id: category.id,
  }));
}

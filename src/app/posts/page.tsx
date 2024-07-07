import { Twitter } from "lucide-react";

import { CategoryList } from "@/components/category/category-list";
import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ServicesFactory } from "@/services";

const title = "Artículos, recursos y tutoriales sobre Desarrollo Web";
const description =
  "Descubre y aprende sobre Desarrollo Web a través de artículos, recursos y tutoriales. Mantente informado sobre las últimas tendencias y novedades del sector.";

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default async function PostListPage() {
  const { categoryService, postService } = ServicesFactory.create();

  const categories = categoryService.fetchAll();
  const posts = await postService.fetchAll();

  return (
    <Container className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Artículos, recursos y tutoriales sobre Desarrollo Web
          </h1>

          <p className="text-md md:text-lg text-muted-foreground">
            Descubre y aprende sobre <strong>Desarrollo Web</strong> a través de
            artículos, recursos y tutoriales. Mantente informado sobre las
            últimas tendencias y novedades del sector.
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
        <h2 className="text-2xl font-semibold">Todos los artículos</h2>

        <PostList posts={posts} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Categorias</h2>

        <CategoryList categories={categories} />
      </section>
    </Container>
  );
}

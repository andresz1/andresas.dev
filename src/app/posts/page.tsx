import { Twitter } from "lucide-react";

import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ServicesFactory } from "@/services";

export const metadata = {
  title: "Aprende sobre desarrollo web y más",
  description:
    "Aprende buenas prácticas y mantente actualizado a través de artículos cortos basados en experiencias reales..",
};

export default async function PostListPage() {
  const { postService } = ServicesFactory.create();

  const posts = await postService.fetchAll();

  return (
    <Container className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Aprende sobre Desarrollo Web y más
          </h1>

          <p className="text-md md:text-lg text-muted-foreground">
            Descubre buenas prácticas y mantente actualizado con artículos
            cortos basados en experiencias reales de{" "}
            <strong>desarrollo web</strong>.
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
    </Container>
  );
}

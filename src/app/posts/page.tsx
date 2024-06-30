import { Twitter } from "lucide-react";

import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ServicesFactory } from "@/services";

export const metadata = {
  title: "Consejos sobre JavaScript, React y más",
  description:
    "Cuento mis experiencia trabajando en aplicaciones web de gran escala",
};

export default async function PostListPage() {
  const { postService } = ServicesFactory.create();

  const posts = await postService.fetchAll();

  return (
    <>
      <Container>
        <div className="max-w-2xl mx-auto space-y-4 text-center">
          <div className="text-xl md:text-2xl font-semibold">
            Hola, soy Andres Alvarez 👋🏻
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold">
              Consejos sobre JavaScript, CSS, React y más
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground">
              Te cuento mis experiencias trabajando en aplicaciones web de gran
              escala como:{" "}
              <a href="https://www.fotocasa.es/es/" target="_blank">
                fotocasa
              </a>
              ,{" "}
              <a href="https://www.fotocasa.es/es/" target="_blank">
                coches.net
              </a>
              ,{" "}
              <a href="https://www.fotocasa.es/es/" target="_blank">
                milanuncios
              </a>
              ,{" "}
              <a href="https://www.fotocasa.es/es/" target="_blank">
                lenboncoin
              </a>{" "}
              y{" "}
              <a href="https://www.fotocasa.es/es/" target="_blank">
                OLX
              </a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-2 justify-center">
            <Button size="lg" className="shadow-md">
              <Icon>
                <Twitter />
              </Icon>
              Sígueme
            </Button>
          </div>
        </div>
      </Container>

      <Container asChild>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Todos los artículos</h2>

          <PostList posts={posts} />
        </section>
      </Container>
    </>
  );
}

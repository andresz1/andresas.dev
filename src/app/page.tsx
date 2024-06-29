import { Twitter } from "lucide-react";
import Link from "next/link";

import { Header } from "@/components/layout/header";
import { getPosts } from "@/components/post/get-posts";
import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";

export const metadata = {
  title: "Consejos sobre JavaScript, React y más",
  description:
    "Cuento mis experiencia trabajando en aplicaciones web de gran escala",
};

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <>
      <Header />
      <main className="space-y-6">
        <Container className="py-8">
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <div className="text-xl md:text-2xl font-semibold">
              Hola, soy Andres Alvarez 👋🏻
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold">
                Consejos sobre JavaScript, CSS, React y más
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground">
                Te cuento mis experiencias trabajando en aplicaciones web de
                gran escala como:{" "}
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
                Ver artículos
              </Button>

              <Button size="lg" variant="outline" className="shadow-md">
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
            <h2 className="text-2xl font-semibold">Sobre mi</h2>

            <p className="text-muted-foreground">
              I am a frontend developer, optimist, and community builder. I
              currently work as the VP of Product at Vercel, where I help teach
              the Next.js logomarkNext.js community, an open-source web
              framework built with React.
            </p>

            <div className="flex justify-center">
              <Button asChild>
                <Link href="/cv">Ver CV</Link>
              </Button>
            </div>
          </section>
        </Container>

        <Container asChild>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Últimos artículos</h2>

            <PostList posts={posts} />
          </section>
        </Container>
      </main>
    </>
  );
}

import { Twitter } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

import { CategoryList } from "@/components/category/category-list";
import { PostList } from "@/components/post/post-list";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { ServicesFactory } from "@/services";

export const metadata: Metadata = {
  title: "JavaScript, CSS, React y más | andresas",
  description:
    "Comparto mis experiencias trabajando en aplicaciones web de gran escala, así como en proyectos personales, a través de artículos cortos.",
};

export default async function HomePage() {
  const { categoryService, postService } = ServicesFactory.create();

  const categories = categoryService.fetchAll();
  const posts = await postService.fetchAll();

  return (
    <Container className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-2">
          <div className="text-lg md:text-xl text-muted-foreground">
            Hola, soy <strong>Andrés Alvarez</strong> 👋🏻 y aqui encontrarás:
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            Artículos cortos sobre JavaScript, CSS, React y más
          </h1>

          <p className="text-md md:text-lg text-muted-foreground">
            Comparto mis experiencias trabajando en aplicaciones web de gran
            escala, así como en proyectos personales, a través de{" "}
            <strong>artículos cortos</strong> sobre{" "}
            <strong>desarrollo web</strong>.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 justify-center">
          <Button size="lg" className="shadow-md" asChild>
            <Link href="/posts">Ver artículos</Link>
          </Button>

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
        <h2 className="text-2xl font-semibold">Sobre mí</h2>

        <p className="text-muted-foreground">
          Soy desarrollador web, me encanta aprender cosas nuevas y compartir
          mis conocimientos. Actualmente, trabajo como{" "}
          <b>Staff Front-End Platform Engineer</b> en Adevinta, donde doy
          soporte a aplicaciones como Fotocasa, Habitaclia, Infojobs, Coches.net
          y Leboncoin. <br />
          <br /> Disfruto colaborando en proyectos de código abierto y
          desarrollando proyectos personales. Además, ofrezco servicios de
          consultoría en Web Performance.
        </p>

        <div className="flex justify-center gap-2">
          <Button asChild>
            <Link href="/cv">Ver más</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Últimos artículos</h2>

        <PostList posts={posts} />

        <div className="flex justify-center gap-2">
          <Button asChild>
            <Link href="/posts">Ver todos</Link>
          </Button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Categorias</h2>

        <CategoryList categories={categories} />
      </section>
    </Container>
  );
}

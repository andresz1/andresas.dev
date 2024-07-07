import { Twitter } from "lucide-react";
import Link from "next/link";

import { PostList } from "@/components/post/post-list";
import { ProjectCard } from "@/components/project/project-card";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { RESUME_DATA } from "@/data/es/resume";
import { ServicesFactory } from "@/services";

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const title = "andresas | Blog personal sobre Desarrollo Web";
  const description =
    "Comparto mis experiencias trabajando en aplicaciones web de gran escala, así como en proyectos personales, a través de artículos, recursos y tutoriales sobre Desarrollo Web.";
  const image = `${siteURL}/og`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
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

export default async function HomePage() {
  const { postService } = ServicesFactory.create();

  const posts = await postService.fetchAll();

  return (
    <Container className="space-y-6">
      <div className="max-w-2xl mx-auto space-y-4 text-center">
        <div className="space-y-2">
          <div className="text-lg md:text-xl text-muted-foreground">
            Hola 👋🏻 soy <strong>Andrés Alvarez</strong> y este es mi
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            Blog sobre Desarrollo Web
          </h1>

          <p className="text-md md:text-lg text-muted-foreground">
            Comparto mis experiencias trabajando en aplicaciones web de gran
            escala y en proyectos personales.
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
          Soy un desarrollador web al que le encanta aprender cosas nuevas y
          compartir lo que sabe. Ahora mismo, trabajo como Staff Front-End
          Engineer en Adevinta, donde apoyo aplicaciones como{" "}
          <a
            className="font-semibold hover:underline"
            href="https://www.fotocasa.es/es"
            target="_blank"
          >
            Fotocasa
          </a>
          ,{" "}
          <a
            className="font-semibold hover:underline"
            href="https://www.habitaclia.com"
            target="_blank"
          >
            Habitaclia
          </a>
          ,{" "}
          <a
            className="font-semibold hover:underline"
            href="https://www.infojobs.net"
            target="_blank"
          >
            Infojobs
          </a>
          ,{" "}
          <a
            className="font-semibold hover:underline"
            href="https://www.coches.net"
            target="_blank"
          >
            Coches.net
          </a>{" "}
          y{" "}
          <a
            className="font-semibold hover:underline"
            href="https://www.leboncoin.fr"
            target="_blank"
          >
            Leboncoin
          </a>
          .<br />
          <br />
          Disfruto colaborando en proyectos de código abierto y desarrollando
          mis propios proyectos personales. Además, ofrezco servicios de
          consultoría en Web Performance para hacer que las webs sean más
          rápidas y eficientes.
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
        <h2 className="text-2xl font-semibold">Mis proyectos</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {RESUME_DATA.projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={"link" in project ? project.link.href : undefined}
              />
            );
          })}
        </div>
      </section>
    </Container>
  );
}

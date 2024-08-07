import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import Image from "next/image";

import { ProjectCard } from "@/components/project/project-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { RESUME_DATA } from "@/data/en/resume";

export async function generateMetadata() {
  const siteURL = process.env.SITE_URL;
  const title = `${RESUME_DATA.name} | ${RESUME_DATA.about}`;
  const description = RESUME_DATA.summary;
  const image = `${siteURL}/og?title=CV`;

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

export default function Page() {
  return (
    <div className="container relative mx-auto scroll-my-12 overflow-auto print:p-12">
      <div className="mx-auto w-full max-w-4xl space-y-8 print:space-y-4">
        <section className="flex flex-col items-center space-y-4">
          <div className="relative size-32 rounded-full overflow-hidden">
            <Image
              alt={RESUME_DATA.name}
              src={RESUME_DATA.avatarUrl}
              fill
              priority
            />
          </div>

          <div className="space-y-0 text-center">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>

            <div className="space-y-0.5">
              <p className="text-muted-foreground text-md">
                {RESUME_DATA.about}
              </p>

              <p className="text-muted-foreground text-sm">
                <a
                  className="flex gap-1 items-center justify-center hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <Icon>
                    <GlobeIcon />
                  </Icon>

                  {RESUME_DATA.location}
                </a>
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            {RESUME_DATA.contact.email ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <Icon>
                    <MailIcon />
                  </Icon>
                </a>
              </Button>
            ) : null}

            {RESUME_DATA.contact.tel ? (
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`tel:${RESUME_DATA.contact.tel}`}>
                  <Icon>
                    <PhoneIcon />
                  </Icon>
                </a>
              </Button>
            ) : null}

            {RESUME_DATA.contact.social.map((social) => (
              <Button
                key={social.name}
                className="size-8"
                variant="outline"
                size="icon"
                asChild
              >
                <a href={social.url}>
                  <Icon>
                    <social.icon className="size-4" />
                  </Icon>
                </a>
              </Button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-y-3">
          <h2 className="text-xl font-bold">About</h2>

          <p className="text-sm text-muted-foreground">{RESUME_DATA.summary}</p>
        </section>

        <section className="flex flex-col gap-y-6">
          <h2 className="text-xl font-bold">Work Experience</h2>

          {RESUME_DATA.work.map((work) => {
            return (
              <article className="space-y-2" key={work.company}>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-lg">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>

                    <div className="text-sm tabular-nums text-muted-foreground">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="text-md leading-none">{work.title}</h4>

                  <div className="text-sm leading-none">{work.location}</div>
                </div>

                <div className="text-sm text-muted-foreground">
                  {work.description}
                </div>
              </article>
            );
          })}
        </section>

        <section className="flex flex-col gap-y-6">
          <h2 className="text-xl font-bold">Education</h2>

          {RESUME_DATA.education.map((education) => {
            return (
              <article key={education.school} className="space-y-2">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>

                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>

                <div className="text-sm leading-none">{education.degree}</div>
              </article>
            );
          })}
        </section>

        <section className="flex flex-col gap-y-6">
          <h2 className="text-xl font-bold">Skills</h2>

          <div>
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm mr-2 mb-3"
                >
                  {skill}
                </Badge>
              );
            })}
          </div>
        </section>

        <section className="flex flex-col gap-y-6">
          <h2 className="text-xl font-bold">Projects</h2>

          <div className="grid grid-cols-2 gap-4 print:grid-cols-3 lg:grid-cols-3">
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
      </div>
    </div>
  );
}

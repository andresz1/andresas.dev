import Image from "next/image";

import { LinkBox, LinkOverlay } from "@/components/ui/link-overlay";

interface Props {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
}

export function ProjectCard({ title, description, imageUrl, link }: Props) {
  return (
    <LinkBox
      className="flex flex-col overflow-hidden rounded-md border transition-all"
      asChild
    >
      <article>
        <div className="relative aspect-video">
          <Image
            className="rounded-tl-md rounded-tr-md object-cover"
            src={imageUrl}
            alt={title}
            fill
          />
        </div>

        <div className="px-2 pt-2 pb-4 space-y-2">
          <h3 className="text-base font-semibold">
            {link ? (
              <LinkOverlay
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}
              </LinkOverlay>
            ) : (
              title
            )}
          </h3>

          <p className="text-sm print:text-xs text-muted-foreground line-clamp-4">
            {description}
          </p>
        </div>
      </article>
    </LinkBox>
  );
}

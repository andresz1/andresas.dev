import { Badge } from "@/components/ui/badge";
import { LinkBox, LinkOverlay } from "@/components/ui/link-overlay";

interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
}

export function ProjectCard({ title, description, tags, link }: Props) {
  return (
    <LinkBox
      className="flex flex-col overflow-hidden rounded-md border border-muted hover:shadow-md p-3"
      asChild
    >
      <article className="flex flex-col gap-2">
        <div className="space-y-1 flex-1">
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

          <div className="hidden text-sm underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>

          <p className="text-sm print:text-xs text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {tags.map((tag) => (
            <Badge
              className="px-1 py-0 text-[10px] print:px-1 print:py-0.5 print:leading-tight"
              variant="secondary"
              key={tag}
            >
              {tag}
            </Badge>
          ))}
        </div>
      </article>
    </LinkBox>
  );
}

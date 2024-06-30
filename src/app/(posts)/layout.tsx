import { Container } from "@/components/ui/container";

export default function PostDetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container className="prose break-words dark:prose-invert prose-p:leading-relaxed">
      {children}
    </Container>
  );
}

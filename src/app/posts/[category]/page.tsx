import { PostList } from "@/components/post/post-list";
import { Container } from "@/components/ui/container";
import { ServicesFactory } from "@/services";

export const metadata = {
  title: "Consejos sobre JavaScript, React y más",
  description:
    "Cuento mis experiencia trabajando en aplicaciones web de gran escala",
};

export interface CategoryDetailPage {
  params: { category: string };
}

export default async function CategoryDetailPage({
  params,
}: CategoryDetailPage) {
  const { category } = params;
  const { postService } = ServicesFactory.create();

  const posts = await postService.fetchAllByCategory({ id: category });

  return (
    <>
      <h1>Categoria {category}</h1>

      <Container asChild>
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Todos los artículos</h2>

          <PostList posts={posts} />
        </section>
      </Container>
    </>
  );
}

export function generateStaticParams() {
  const { categoryService } = ServicesFactory.create();
  const categories = categoryService.fetchAll();

  return categories.map((category) => ({
    id: category.id,
  }));
}

import { Category } from "@/types/Category";

const categories = [
  { id: "javascript", name: "JavaScript" },
  { id: "react", name: "React" },
  { id: "nextjs", name: "Next.js" },
  { id: "css", name: "CSS" },
] as Array<Category>;

export class CategoryService {
  fetchOne({ id }: { id: string }): Category | undefined {
    return categories.find((categories) => categories.id === id);
  }

  fetchAll(): Array<Category> {
    return categories;
  }
}

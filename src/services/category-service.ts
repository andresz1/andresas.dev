import { Category } from "@/types/Category";

const categories = [
  { id: "javascript" },
  { id: "react" },
  { id: "nextjs" },
  { id: "css" },
] as Array<Category>;

export class CategoryService {
  fetchAll(): Array<Category> {
    return categories;
  }
}

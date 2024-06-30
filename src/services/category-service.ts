import categories from "@/data/categories.json";
import { Category } from "@/types/Category";

export class CategoryService {
  fetchOne({ id }: { id: string }): Category | undefined {
    return categories.find((categories) => categories.id === id);
  }

  fetchAll(): Array<Category> {
    return categories;
  }
}

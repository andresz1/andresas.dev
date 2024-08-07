import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

import { Button } from "@/components/ui/button";
import { Category } from "@/types/Category";

export interface CategoryListProps extends ComponentPropsWithoutRef<"div"> {
  categories: Array<Category>;
}

export const CategoryList = ({ categories, ...others }: CategoryListProps) => {
  return (
    <div {...others}>
      {categories.map((category) => (
        <Button
          className="mr-2 mb-2"
          variant="secondary"
          key={category.id}
          asChild
        >
          <Link href={`/posts/${category.id}`}>{category.name}</Link>
        </Button>
      ))}
    </div>
  );
};

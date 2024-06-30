import { CategoryService } from "./category-service";
import { PostService } from "./post-service";

export class ServicesFactory {
  static create() {
    const services = {
      postService: new PostService(),
      categoryService: new CategoryService(),
    };

    return services;
  }
}

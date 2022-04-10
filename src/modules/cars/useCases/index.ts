import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ListCategoriesController } from "./listCategories/ListCategoriesControllers";
import { ListCategoriesUseCase } from "./listCategories/ListCategoryUseCase";

const categoriesRepository = new CategoriesRepository();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
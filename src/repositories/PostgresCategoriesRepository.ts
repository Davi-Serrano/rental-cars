import { Category } from "../models/Category";
import { ICategoriesRepositories, ICreateCategoryDTO } from "./ICategoiresRepository";

class PostgresCategoriesRepositories implements ICategoriesRepositories{
    findByName(name: string): Category {
        console.log(name);
       return null;
    }
    list(): Category[] {
        return null;
    }
    create({name, description}: ICreateCategoryDTO): void {
        console.log(name, description);
    }
}

export { PostgresCategoriesRepositories }
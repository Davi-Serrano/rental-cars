import { Category } from "../models/Category";

interface ICreateCategoryDTO{
    name: string;
    description: string;
}

class CategoriesRepository{
    private categories : Category[];

    constructor(){
        this.categories = [];
    }

    create({description, name}: ICreateCategoryDTO): void{

        const category : Category = new Category();
    
        Object.assign(category, {
            name,
            description,
            create_at: new Date()
        });

        this.categories.push(category);
    }

    list(){
        return this.categories;
    }

    findByName(name: string): Category{
        const category = this.categories.find( categories => categories.name === name)

        return category
    }
}

export { CategoriesRepository }
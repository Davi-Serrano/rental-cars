import { Category } from "../models/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "./ICategoriesRepository";



class CategoriesRepository implements ICategoriesRepository{
    private categories : Category[];

    private static INSTANCE: CategoriesRepository;

    private constructor(){
        this.categories = [];
    }

    public static getInstance(): CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){
            CategoriesRepository.INSTANCE = new CategoriesRepository();
        }
        return CategoriesRepository.INSTANCE
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
import { ICategoriesRepositories } from "../repositories/ICategoiresRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryServices {
    constructor(private categoriesRepository: ICategoriesRepositories){}

    execute({name, description}: IRequest ): void{
        const categoryAlreadyExist = this.categoriesRepository.findByName(name)

    if(categoryAlreadyExist){
        throw new Error("Category already Exists")
    }
    
    this.categoriesRepository.create({name,description})
    }
}

export { CreateCategoryServices }
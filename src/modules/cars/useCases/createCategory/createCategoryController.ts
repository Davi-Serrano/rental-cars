import { Request, Response } from "express"
import { CreateCategoryUseCase } from "./CreateCategoryuseCase";


class CreateCategoryController {
    constructor(private createCategoriesUseCase: CreateCategoryUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
    const { name, description } = request.body;

    await this.createCategoriesUseCase.execute({name, description});

    return response.status(201).send();
    }
}

export {  CreateCategoryController}
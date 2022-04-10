import { Request, Response } from "express"
import { CreateCategoryUseCase } from "./CreateCategoryuseCase";


class CreateCategoryController {
    constructor(private createCategoriesUseCase: CreateCategoryUseCase){}

    handle(request: Request, response: Response): Response{
    const { name, description } = request.body;

    this.createCategoriesUseCase.execute({name, description});

    return response.status(201).send();
    }
}

export {  CreateCategoryController}
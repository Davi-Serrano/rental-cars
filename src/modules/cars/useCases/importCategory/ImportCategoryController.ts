import { Request, Response } from 'express';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';


class ImportCategoryController {

    constructor(private importCateoryUseCase: ImportCategoryUseCase){}

    handle(request: Request, response: Response): Response {
        const { file } = request;

        this.importCateoryUseCase.execute(file)
        
        return response.send();
    }

};

export { ImportCategoryController };
import { Router } from "express" 
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationRoutes.post("/", (request, response)=>{
    return createSpecificationController.handle(request, response)
});

export { specificationsRoutes } ; 
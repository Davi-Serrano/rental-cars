import { Router } from "express"
import { CrateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUser = new CrateUserController();

usersRoutes.post("/", createUser.handle);

export { usersRoutes };
import  {container}  from "tsyringe"

import { UserRepository } from "../../modules/accounts/reposiroies/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/reposiroies/IUserRepository";

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"

import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
    "SpecificationsRepository",
    SpecificationsRepository
);

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);

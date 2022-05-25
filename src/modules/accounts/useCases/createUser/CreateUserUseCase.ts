import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUserRepository } from "../../reposiroies/IUserRepository";


@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ){}

    async execute({name, driver_license, email, password}: ICreateUserDTO): Promise<void>{
        await this.userRepository.create({
            name,  
            driver_license, 
            email, 
            password
        });
    }
}

export { CreateUserUseCase };
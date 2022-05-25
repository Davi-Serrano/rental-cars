import { hash } from "bcryptjs";
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
        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(!userAlreadyExists){
            throw new Error("User Already Exists");
        }
        
        const passwordHash = await hash(password, 8);

        await this.userRepository.create({
            name,  
            driver_license, 
            email, 
            password: passwordHash
        });
    }
}

export { CreateUserUseCase };
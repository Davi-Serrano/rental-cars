import { getRepository, Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationsRepository } from "../ISpecificationsRepository";

class SpecificationsRepository implements ISpecificationsRepository{
    private repositoty: Repository<Specification>
    constructor(){
        this.repositoty = getRepository(Specification)
    }
    
    async create({ description, name }: ICreateSpecificationDTO): Promise<void>{
        const specification = this.repositoty.create({
            name,
            description
        });

        await this.repositoty.save(specification);
    }
    
    async findByName(name: string): Promise<Specification> {
        const specification = this.repositoty.findOne({
            name
        });
        return specification
    }
}

export {SpecificationsRepository }
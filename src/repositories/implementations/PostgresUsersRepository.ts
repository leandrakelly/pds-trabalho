import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../modules/createUser/createUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export class PostgresUsersRepository implements IUsersRepository {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async save(data: ICreateUserDTO): Promise<User>{
        const { email, password, role } = data;

        const user = new User({
            email,
            password,
            role
        });

        return await this.userRepository.save(user);
    }

    async list(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async findById(id: string): Promise<User> {
        return await this.userRepository.findOne({ where: {id}});   
    }
    async findByIds(ids: string[]): Promise<User[]> {
        return await this.userRepository.findBy({ id: Any(ids) });
    }

    async update(user: User): Promise<void> {
        await this.userRepository.save(user);
    }

    async delete(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
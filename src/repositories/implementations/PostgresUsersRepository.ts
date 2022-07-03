import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { User } from '../../entities/User';
import { ICreateUserDTO } from '../../modules/createUser/CreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';
import { PostgresCoursesRepository } from './PostgresCoursesRepository';

export class PostgresUsersRepository implements IUsersRepository {
    userRepository: Repository<User>;

    constructor() {
        this.userRepository = AppDataSource.getRepository(User);
    }

    async save(data: ICreateUserDTO): Promise<User>{
        const { email, password, role, courses_ids } = data;
        const courses = await new PostgresCoursesRepository().findByIds(courses_ids);


        const user = new User({
            email,
            password,
            role,
            courses
        });

        return await this.userRepository.save(user);
    }

    async list(): Promise<User[]> {
        return await this.userRepository.find({
            relations: {
                courses: true
            }
        });
    }

    async findById(id: string): Promise<User> {
        return await this.userRepository.findOne({
            where: { id },
            relations: {
                courses: true
            }
        });
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
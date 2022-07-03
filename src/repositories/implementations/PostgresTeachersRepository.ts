import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { Teacher } from '../../entities/Teacher';
import { ICreateTeacherDTO } from '../../modules/createTeacher/CreateTeacherDTO';
import { ITeachersRepository } from '../ITeachersRepository';
import { PostgresCoursesRepository } from './PostgresCoursesRepository';

export class PostgresTeachersRepository implements ITeachersRepository {
    teachersRepository: Repository<Teacher>;

    constructor() {
        this.teachersRepository = AppDataSource.getRepository(Teacher);
    }

    async save(data: ICreateTeacherDTO): Promise<Teacher>{
        const { name, courses_ids } = data;
        const courses = await new PostgresCoursesRepository().findByIds(courses_ids);

        const teacher = new Teacher({
            name,
            courses
        });

        return await this.teachersRepository.save(teacher);
    }

    async list(): Promise<Teacher[]> {
        return await this.teachersRepository.find({
            relations: {
                courses: true
            }
        });
    }

    async findById(id: string): Promise<Teacher> {
        return await this.teachersRepository.findOne({
            where: { id },
            relations: {
                courses: true
            }
        });
    }

    async findByIds(ids: string[]): Promise<Teacher[]> {
        return await this.teachersRepository.findBy({ id: Any(ids) });
    }

    async update(teacher: Teacher): Promise<void> {
        await this.teachersRepository.save(teacher);
    }

    async delete(id: string): Promise<void> {
        await this.teachersRepository.delete(id);
    }
}
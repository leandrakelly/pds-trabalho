import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { Classroom } from '../../entities/Classroom';
import { ICreateClassroomDTO } from '../../modules/createClassroom/CreateClassroomDTO';
import { IClassroomsRepository } from '../IClassroomsRepository';
import { PostgresCoursesRepository } from './PostgresCoursesRepository';

export class PostgresClassroomsRepository implements IClassroomsRepository {
    classRoomRepository: Repository<Classroom>;

    constructor() {
        this.classRoomRepository = AppDataSource.getRepository(Classroom);
    }

    async save(data: ICreateClassroomDTO): Promise<Classroom>{
        const { number, courses_ids } = data;
        const courses = await new PostgresCoursesRepository().findByIds(courses_ids);

        const classroom = new Classroom({
            number,
            courses
        });

        return await this.classRoomRepository.save(classroom);
    }

    async list(): Promise<Classroom[]> {
        return await this.classRoomRepository.find({
            relations: {
                courses: true
            }
        });
    }

    async findById(id: string): Promise<Classroom> {
        return await this.classRoomRepository.findOne({
            where: { id },
            relations: {
                courses: true
            }
        });
    }

    async findByIds(ids: string[]): Promise<Classroom[]> {
        return await this.classRoomRepository.findBy({ id: Any(ids) });
    }

    async update(classroom: Classroom): Promise<void> {
        await this.classRoomRepository.save(classroom);
    }

    async delete(id: string): Promise<void> {
        await this.classRoomRepository.delete(id);
    }
}
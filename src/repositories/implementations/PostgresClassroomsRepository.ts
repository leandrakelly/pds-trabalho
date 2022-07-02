import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { Classroom } from '../../entities/Classroom';
import { ICreateClassroomDTO } from '../../modules/createClassroom/CreateClassroomDTO';
import { IClassroomsRepository } from '../IClassroomsRepository';

export class PostgresClassroomsRepository implements IClassroomsRepository {
    classRoomRepository: Repository<Classroom>;

    constructor() {
        this.classRoomRepository = AppDataSource.getRepository(Classroom);
    }

    async save(data: ICreateClassroomDTO): Promise<Classroom>{
        const { number } = data;

        const classroom = new Classroom({
            number,
        });

        return await this.classRoomRepository.save(classroom);
    }

    async list(): Promise<Classroom[]> {
        return await this.classRoomRepository.find();
    }

    async findById(id: string): Promise<Classroom> {
        return await this.classRoomRepository.findOne({ where: {id}});   
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
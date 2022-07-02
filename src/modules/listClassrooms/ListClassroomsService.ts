import { Classroom } from '../../entities/Classroom';
import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';

export class ListClassroomsService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (): Promise<Classroom[]> {
        const classrooms = await this.classroomsRepository.list();

        return classrooms;
    }
}
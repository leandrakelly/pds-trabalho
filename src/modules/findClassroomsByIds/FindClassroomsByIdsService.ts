import { Classroom } from '../../entities/Classroom';
import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';

export class FindClassroomsByIdsService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (ids: string[]): Promise<Classroom[]> {
        const classrooms = await this.classroomsRepository.findByIds(ids);

        return classrooms;
    }
}
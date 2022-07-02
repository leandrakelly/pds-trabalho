import { Classroom } from '../../entities/Classroom';
import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';

export class FindClassroomByIdService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (id: string): Promise<Classroom> {
        const classroom = await this.classroomsRepository.findById(id);

        if (!classroom) {
            throw new Error('Classroom does not exist!');
        }

        return classroom;
    }
}
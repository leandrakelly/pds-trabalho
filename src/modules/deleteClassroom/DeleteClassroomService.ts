import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';

export class DeleteClassroomService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (id: string): Promise<void> {
        const classroom = await this.classroomsRepository.findById(id);

        if (!classroom) {
            throw new Error('Classroom does not exist!');
        }
        await this.classroomsRepository.delete(id);
    }
}
import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';

export class DeleteClassroomService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute (id: string): Promise<void> {
        await this.classroomsRepository.delete(id);
    }
}
import { Classroom } from '../../entities/Classroom';
import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';
import { IEditClassroomDTO } from './EditClassroomDTO';

export class EditClassroomService {
    constructor(private classroomsRepository: IClassroomsRepository) {}

    async execute(id: string, data: IEditClassroomDTO): Promise<Classroom> {
        const classroom = await this.classroomsRepository.findById(id);

        if (!classroom) {
            throw new Error('Course does not exist!');
        }

        classroom.number = data.number;

        await this.classroomsRepository.update(classroom);

        return classroom;
    }
}
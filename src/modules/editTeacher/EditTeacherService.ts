import { Teacher } from '../../entities/Teacher';
import { ITeachersRepository } from '../../repositories/ITeachersRepository';
import { IEditTeacherDTO } from './EditTeacherDTO';

export class EditTeacherService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute(id: string, data: IEditTeacherDTO): Promise<Teacher> {
        const teacher = await this.teachersRepository.findById(id);

        if (!teacher) {
            throw new Error('Course does not exist!');
        }

        teacher.name = data.name;

        await this.teachersRepository.update(teacher);

        return teacher;
    }
}
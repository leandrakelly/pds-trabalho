import { Teacher } from '../../entities/Teacher';
import { ITeachersRepository } from '../../repositories/ITeachersRepository';

export class FindTeacherByIdService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (id: string): Promise<Teacher> {
        const teacher = await this.teachersRepository.findById(id);

        if (!teacher) {
            throw new Error('Teacher does not exist!');
        }

        return teacher;
    }
}
import { ITeachersRepository } from '../../repositories/ITeachersRepository';

export class DeleteTeacherService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (id: string): Promise<void> {
        const teacher = await this.teachersRepository.findById(id);

        if (!teacher) {
            throw new Error('Teacher does not exist!');
        }
        await this.teachersRepository.delete(id);
    }
}
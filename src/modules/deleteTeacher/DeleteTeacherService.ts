import { ITeachersRepository } from '../../repositories/ITeachersRepository';

export class DeleteTeacherService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (id: string): Promise<void> {
        await this.teachersRepository.delete(id);
    }
}
import { Teacher } from '../../entities/Teacher';
import { ITeachersRepository } from '../../repositories/ITeachersRepository';

export class FindTeachersByIdsService {
    constructor(private teachersRepository: ITeachersRepository) {}

    async execute (ids: string[]): Promise<Teacher[]> {
        const teachers = await this.teachersRepository.findByIds(ids);

        return teachers;
    }
}
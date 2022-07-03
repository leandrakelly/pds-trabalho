import { ICoursesRepository } from '../../repositories/ICoursesRepository';

export class DeleteCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (id: string): Promise<void> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        await this.coursesRepository.delete(id);
    }
}
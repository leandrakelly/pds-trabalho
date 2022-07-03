import { Course } from '../../entities/Course';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';
import { IEditStatusDTO } from './EditStatusDTO';

export class EditStatusService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(id: string, data: IEditStatusDTO): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        course.status = data.status;

        await this.coursesRepository.update(course);

        return course;
    }
}
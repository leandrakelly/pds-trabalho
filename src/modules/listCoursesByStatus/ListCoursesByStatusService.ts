import { Course, CourseStatus } from '../../entities/Course';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';

export class ListCoursesByStatusService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (status: CourseStatus): Promise<Course[]>{
        const courses = await this.coursesRepository.listByStatus(status);

        return courses;
    }
}
import { Course } from '../../entities/Course';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';

export class ListCoursesService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute (): Promise<Course[]>{
        const courses = await this.coursesRepository.list();

        return courses;
    }
}
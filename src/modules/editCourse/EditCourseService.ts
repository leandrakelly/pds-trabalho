import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { IEditCourseDTO } from "./EditCourseDTO";
import { Course } from "../../entities/Course";

export class EditCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(id: string, data: IEditCourseDTO): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        course.name = data.name;
        course.start_time = data.start_time;
        course.end_time = data.end_time;


        await this.coursesRepository.update(course);

        return course;
    }
}
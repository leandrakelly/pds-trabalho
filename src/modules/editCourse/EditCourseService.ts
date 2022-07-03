import { Course } from '../../entities/Course';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';
import { findClassroomsByIdsService } from '../findClassroomsByIds/FindClassroomsByIdsFactory';
import { findTeachersByIdsService } from '../findTeachersByIds/FindTeachersByIdsFactory';
import { IEditCourseDTO } from './EditCourseDTO';

export class EditCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(id: string, data: IEditCourseDTO): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        const teachers = await findTeachersByIdsService.execute(data.teacher_ids);

        const classrooms = await findClassroomsByIdsService.execute(data.classroom_ids);

        course.name = data.name;
        course.start_time = data.start_time;
        course.end_time = data.end_time;
        course.teachers = teachers;
        course.classrooms = classrooms;
        course.status = data.status;


        await this.coursesRepository.update(course);

        return course;
    }
}
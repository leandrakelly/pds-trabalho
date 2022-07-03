import { Course } from '../../entities/Course';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';
import { findClassroomsByIdsService } from '../findClassroomsByIds/FindClassroomsByIdsFactory';
import { findTeachersByIdsService } from '../findTeachersByIds/FindTeachersByIdsFactory';
import { findUsersByIdsService } from '../findUsersByIds/FindUsersByIdsFactory';
import { IEditCourseDTO } from './EditCourseDTO';

export class EditCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(id: string, data: IEditCourseDTO): Promise<Course> {
        const course = await this.coursesRepository.findById(id);

        if (!course) {
            throw new Error('Course does not exist!');
        }

        if (data.teacher_ids) {
            const teachers = await findTeachersByIdsService.execute(data.teacher_ids);
            course.teachers = teachers;
        }

        if (data.classroom_ids) {
            const classrooms = await findClassroomsByIdsService.execute(data.classroom_ids);
            course.classrooms = classrooms;
        }

        if (data.users_ids) {
            const users = await findUsersByIdsService.execute(data.users_ids);
            course.users = users;
        }

        course.name = data.name;
        course.start_time = data.start_time;
        course.end_time = data.end_time;
        course.status = data.status;


        return await this.coursesRepository.update(course);
    }
}
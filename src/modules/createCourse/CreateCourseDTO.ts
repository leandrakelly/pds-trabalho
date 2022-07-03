import { CourseStatus } from '../../entities/Course';

export interface ICreateCourseDTO {
    name: string;
    start_time: string;
    end_time: string;
    teacher_ids: string[];
    classroom_ids: string[];
    users_ids: string[];
    status: CourseStatus;
}
import { Course, CourseStatus } from '../entities/Course';
import { ICreateCourseDTO } from '../modules/createCourse/CreateCourseDTO';

export interface ICoursesRepository{
    save(data: ICreateCourseDTO): Promise<Course>;
    list(): Promise<Course[]>;
    listByStatus(status: CourseStatus): Promise<Course[]>;
    findById(id: string): Promise<Course>;
    update(course: Course): Promise<Course>;
    delete(id: string): Promise<void>;
}
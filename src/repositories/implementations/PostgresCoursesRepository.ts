import { Any, Repository } from 'typeorm';

import { AppDataSource } from '../../database';
import { Course, CourseStatus } from '../../entities/Course';
import { ICreateCourseDTO } from '../../modules/createCourse/CreateCourseDTO';
import { ICoursesRepository } from '../ICoursesRepository';
import { PostgresClassroomsRepository } from './PostgresClassroomsRepository';
import { PostgresTeachersRepository } from './PostgresTeachersRepository';

export class PostgresCoursesRepository implements ICoursesRepository {
    coursesRepository: Repository<Course>;

    constructor() {
        this.coursesRepository = AppDataSource.getRepository(Course);
    }

    async save(data: ICreateCourseDTO): Promise<Course>{
        const { name, start_time, end_time, teacher_ids, classroom_ids } = data;
        const status = data.status ?? CourseStatus.NEW;
        const teachers = await new PostgresTeachersRepository().findByIds(teacher_ids);
        const classrooms = await new PostgresClassroomsRepository().findByIds(classroom_ids);

        const course = new Course({
            name,
            start_time,
            end_time,
            teachers,
            classrooms,
            status
        });

        return await this.coursesRepository.save(course);
    }

    async list(): Promise<Course[]> {
        return await this.coursesRepository.find({
            relations: {
                teachers: true,
                classrooms: true
            }
        });
    }

    async findById(id: string): Promise<Course> {
        return await this.coursesRepository.findOne({
            where: { id },
            relations: {
                teachers: true,
                classrooms: true
            }
        });
    }

    async findByIds(ids: string[]): Promise<Course[]> {
        return await this.coursesRepository.findBy({ id: Any(ids) });
    }

    async update(course: Course): Promise<void> {
        await this.coursesRepository.save(course);
    }

    async delete(id: string): Promise<void> {
        await this.coursesRepository.delete(id);
    }
}
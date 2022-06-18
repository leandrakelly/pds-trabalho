import { Repository } from "typeorm";
import { AppDataSource } from "../../database";
import { Course } from "../../entities/Course";
import { ICoursesRepository } from "../ICoursesRepository";
import { ICreateCourseDTO } from "../../modules/createCourse/CreateCourseDTO";


export class PostgresCoursesRepository implements ICoursesRepository {
    coursesRepository: Repository<Course>;

    constructor() {
        this.coursesRepository = AppDataSource.getRepository(Course);
    }

    async save(data: ICreateCourseDTO): Promise<Course>{
        const { name, start_time, end_time } = data;

        const course = new Course({
            name,
            start_time,
            end_time,
        });

        return await this.coursesRepository.save(course);
    }

    async list(): Promise<Course[]> {
        return await this.coursesRepository.find();
    }

    async findById(id: string): Promise<Course> {
        return await this.coursesRepository.findOne({
            where: { id }
        });
    }

    async update(course: Course): Promise<void> {
        await this.coursesRepository.save(course);
    }

    async delete(id: string): Promise<void> {
        await this.coursesRepository.delete(id);
    }
}
import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { ICreateCourseDTO } from "./CreateCourseDTO";

export class CreateCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(data: ICreateCourseDTO) {
        return await this.coursesRepository.save(data);
    }
}
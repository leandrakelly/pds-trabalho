import { ICoursesRepository } from "../../repositories/ICoursesRepository";
import { ICreateCourseDTO } from "./CreateCourseDTO";

export class CreateCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(data: ICreateCourseDTO) {
        let timePattern: string = '^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$';

        if (data.start_time.match(timePattern) && data.end_time.match(timePattern)){
            let start_time_hour: number = parseInt(data.start_time.split(':')[0]);
            let end_time_hour: number = parseInt(data.end_time.split(':')[0]);
            
            if (start_time_hour < end_time_hour) {
                return await this.coursesRepository.save(data);
            } else {
                throw new Error("The end time should be past the start time");
            }
        } else {
            throw new Error("The time format should be hh:mm");
        }
    }
}
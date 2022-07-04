import { Course } from '../../entities/Course';
import { User, UserRole } from '../../entities/User';
import { ICoursesRepository } from '../../repositories/ICoursesRepository';
import { findCourseByIdService } from '../findCourseById/FindCourseByIdFactory';
import { findUsersByIdsService } from '../findUsersByIds/FindUsersByIdsFactory';
import { IAddUsersOnCourseDTO } from './AddUsersOnCourseDTO';

export class AddUsersOnCourseService {
    constructor(private coursesRepository: ICoursesRepository) {}

    async execute(data: IAddUsersOnCourseDTO): Promise<Course> {
        const course = await findCourseByIdService.execute(data.course_id);
        const users = await findUsersByIdsService.execute(data.user_ids);

        const nonStudents = this.checkForNonStudentsOnUsers(users);
        
        if (nonStudents.length > 0)
            throw new Error(`The following users are not students: ${nonStudents}`);
        
        course.users = course.users.concat(users);

        return await this.coursesRepository.update(course);
    }

    checkForNonStudentsOnUsers(users: User[]) {
        const nonStudentIds = new Array<string>;

        for (const user of users) {
            if (user.role !== UserRole.STUDENT)
                nonStudentIds.push(user.id);
        }

        return nonStudentIds;
    }
}
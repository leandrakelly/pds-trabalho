import { PostgresCoursesRepository } from '../../repositories/implementations/PostgresCoursesRepository';
import { AddUsersOnCourseController } from './AddUsersOnCourseController';
import { AddUsersOnCourseService } from './AddUsersOnCourseService';

const postgresCoursesRepository = new PostgresCoursesRepository();

const addUsersOnCourseService = new AddUsersOnCourseService(postgresCoursesRepository);

const addUsersOnCourseController = new AddUsersOnCourseController(addUsersOnCourseService);

export { addUsersOnCourseService, addUsersOnCourseController};
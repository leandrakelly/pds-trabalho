import { PostgresCoursesRepository } from '../../repositories/implementations/PostgresCoursesRepository';
import { ListCoursesByStatusController } from './ListCoursesByStatusController';
import { ListCoursesByStatusService } from './ListCoursesByStatusService';

const postgresCoursesRepository = new PostgresCoursesRepository();

const listCoursesByStatusService = new ListCoursesByStatusService(postgresCoursesRepository);

const listCoursesByStatusController = new ListCoursesByStatusController(listCoursesByStatusService);

export { listCoursesByStatusService, listCoursesByStatusController};
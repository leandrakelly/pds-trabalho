import { PostgresCoursesRepository } from '../../repositories/implementations/PostgresCoursesRepository';
import { EditStatusController } from './EditStatusController';
import { EditStatusService } from './EditStatusService';

const postgresCoursesRepository = new PostgresCoursesRepository();

const editStatusService = new EditStatusService(postgresCoursesRepository);

const editStatusController = new EditStatusController(editStatusService);

export { editStatusService, editStatusController };
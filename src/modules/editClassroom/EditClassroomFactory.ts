import { PostgresClassroomsRepository } from '../../repositories/implementations/PostgresClassroomsRepository';
import { EditClassroomController } from './EditClassroomController';
import { EditClassroomService } from './EditClassroomService';

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const editClassroomService = new EditClassroomService(postgresClassroomsRepository);

const editClassroomController = new EditClassroomController(editClassroomService);

export { editClassroomService, editClassroomController };
import { PostgresClassroomsRepository } from '../../repositories/implementations/PostgresClassroomsRepository';
import { DeleteClassroomController } from './DeleteClassroomController';
import { DeleteClassroomService } from './DeleteClassroomService';

const postgresClassroomRepository = new PostgresClassroomsRepository();

const deleteClassroomService = new DeleteClassroomService(postgresClassroomRepository);

const deleteClassroomController = new DeleteClassroomController(deleteClassroomService);

export { deleteClassroomService, deleteClassroomController};
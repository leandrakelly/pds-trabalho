import { PostgresClassroomsRepository } from '../../repositories/implementations/PostgresClassroomsRepository';
import { CreateClassroomController } from './CreateClassroomController';
import { CreateClassroomService } from './CreateClassroomService';

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const createClassroomService = new CreateClassroomService(postgresClassroomsRepository);

const createClassroomController = new CreateClassroomController(createClassroomService);

export { createClassroomService, createClassroomController };
import { PostgresClassroomsRepository } from '../../repositories/implementations/PostgresClassroomsRepository';
import { FindClassroomByIdController } from './FindClassroomByIdController';
import { FindClassroomByIdService } from './FindClassroomByIdService';

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const findClassroomByIdService = new FindClassroomByIdService(postgresClassroomsRepository);

const findClassroomByIdController = new FindClassroomByIdController(findClassroomByIdService);

export { findClassroomByIdService, findClassroomByIdController };
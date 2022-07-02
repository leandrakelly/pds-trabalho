import { PostgresClassroomsRepository } from '../../repositories/implementations/PostgresClassroomsRepository';
import { ListClassroomsController } from './ListClassroomsController';
import { ListClassroomsService } from './ListClassroomsService';

const postgresClassroomsRepository = new PostgresClassroomsRepository();

const listClassroomsService = new ListClassroomsService(postgresClassroomsRepository);

const listClassroomsController = new ListClassroomsController(listClassroomsService);

export { listClassroomsService, listClassroomsController };
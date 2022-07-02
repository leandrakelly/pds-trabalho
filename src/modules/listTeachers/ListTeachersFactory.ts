import { PostgresTeachersRepository } from '../../repositories/implementations/PostgresTeachersRepository';
import { ListTeachersController } from './ListTeachersController';
import { ListTeachersService } from './ListTeachersService';

const postgresTeachersRepository = new PostgresTeachersRepository();

const listTeachersService = new ListTeachersService(postgresTeachersRepository);

const listTeachersController = new ListTeachersController(listTeachersService);

export { listTeachersService, listTeachersController };
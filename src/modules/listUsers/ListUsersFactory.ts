import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { ListUsersController } from './ListUsersController';
import { ListUsersService } from './ListUsersService';

const postgresUsersRepository = new PostgresUsersRepository();

const listUsersService = new ListUsersService(postgresUsersRepository);

const listUsersController = new ListUsersController(listUsersService);

export { listUsersService, listUsersController };
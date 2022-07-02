import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { CreateUserController } from './CreateUserController';
import { CreateUserService } from './CreateUserService';

const postgresUsersRepository = new PostgresUsersRepository();

const createUserService = new CreateUserService(postgresUsersRepository);

const createUserController = new CreateUserController(createUserService);

export { createUserService, createUserController };
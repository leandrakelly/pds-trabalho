import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { FindUserByIdController } from './FindUserByIdController';
import { FindUserByIdService } from './FindUserByIdService';

const postgresUsersRepository = new PostgresUsersRepository();

const findUserByIdService = new FindUserByIdService(postgresUsersRepository);

const findUserByIdController = new FindUserByIdController(findUserByIdService);

export { findUserByIdService, findUserByIdController };
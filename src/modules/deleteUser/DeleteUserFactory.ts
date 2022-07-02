import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { DeleteUserController } from './DeleteUserController';
import { DeleteUserService } from './DeleteUserService';

const postgresUsersRepository = new PostgresUsersRepository();

const deleteUserService = new DeleteUserService(postgresUsersRepository);

const deleteUserController = new DeleteUserController(deleteUserService);

export { deleteUserService, deleteUserController};
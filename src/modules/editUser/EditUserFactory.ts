import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { EditUserController } from './EditUserController';
import { EditUserService } from './EditUserService';

const postgresUsersRepository = new PostgresUsersRepository();

const editUserService = new EditUserService(postgresUsersRepository);

const editUserController = new EditUserController(editUserService);

export { editUserService, editUserController };
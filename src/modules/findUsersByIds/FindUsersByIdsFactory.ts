import { PostgresUsersRepository } from '../../repositories/implementations/PostgresUsersRepository';
import { FindUsersByIdsService } from './FindUsersByIdsService';

const postgresUsersRepository = new PostgresUsersRepository();

const findUsersByIdsService = new FindUsersByIdsService(postgresUsersRepository);

export { findUsersByIdsService}
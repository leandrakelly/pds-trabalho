import { PostgresTeachersRepository } from '../../repositories/implementations/PostgresTeachersRepository';
import { FindTeacherByIdController } from './FindTeacherByIdController';
import { FindTeacherByIdService } from './FindTeacherByIdService';

const postgresTeachersRepository = new PostgresTeachersRepository();

const findTeacherByIdService = new FindTeacherByIdService(postgresTeachersRepository);

const findTeacherByIdController = new FindTeacherByIdController(findTeacherByIdService);

export { findTeacherByIdService, findTeacherByIdController };
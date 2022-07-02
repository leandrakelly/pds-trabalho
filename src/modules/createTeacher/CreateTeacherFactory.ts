import { PostgresTeachersRepository } from '../../repositories/implementations/PostgresTeachersRepository';
import { CreateTeacherController } from './CreateTeacherController';
import { CreateTeacherService } from './createTeacherService';

const postgresTeachersRepository = new PostgresTeachersRepository();

const createTeacherService = new CreateTeacherService(postgresTeachersRepository);

const createTeacherController = new CreateTeacherController(createTeacherService);

export { createTeacherService, createTeacherController };
import { PostgresTeachersRepository } from '../../repositories/implementations/PostgresTeachersRepository';
import { DeleteTeacherController } from './DeleteTeacherController';
import { DeleteTeacherService } from './DeleteTeacherService';

const postgresTeachersRepository = new PostgresTeachersRepository();

const deleteTeacherService = new DeleteTeacherService(postgresTeachersRepository);

const deleteTeacherController = new DeleteTeacherController(deleteTeacherService);

export { deleteTeacherService, deleteTeacherController};
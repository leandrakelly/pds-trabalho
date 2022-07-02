import { PostgresTeachersRepository } from '../../repositories/implementations/PostgresTeachersRepository';
import { EditTeacherController } from './EditTeacherController';
import { EditTeacherService } from './EditTeacherService';


const postgresTeachersRepository = new PostgresTeachersRepository();

const editTeacherService = new EditTeacherService(postgresTeachersRepository);

const editTeacherController = new EditTeacherController(editTeacherService);

export { editTeacherService, editTeacherController };
import { Router } from 'express';

import { createTeacherController } from '../modules/createTeacher/CreateTeacherFactory';
import { deleteTeacherController } from '../modules/deleteTeacher/DeleteTeacherFactory';
import { editTeacherController } from '../modules/editTeacher/EditTeacherFactory';
import { listTeachersController } from '../modules/listTeachers/ListTeachersFactory';

const teachersRouter = Router();

teachersRouter.post('/', (request, response) => {
    return createTeacherController.handle(request, response);
});

teachersRouter.get('/', (request, response) => {
    return listTeachersController.handle(request, response);
})

teachersRouter.put('/:id', (request, response) => {
    return editTeacherController.handle(request, response);
})

teachersRouter.delete('/:id', (request, response) => {
    return deleteTeacherController.handle(request, response);
})

export { teachersRouter };
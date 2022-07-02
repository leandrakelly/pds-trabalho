import { Router } from 'express';

import { createClassroomController } from '../modules/createClassroom/CreateClassroomFactory';
import { editClassroomController } from '../modules/editClassroom/EditClassroomFactory';
import { listClassroomsController } from '../modules/listClassrooms/ListClassroomsFactory';

const classroomsRouter = Router();

classroomsRouter.post('/', (request, response) => {
    return createClassroomController.handle(request, response);
});

classroomsRouter.get('/', (request, response) => {
    return listClassroomsController.handle(request, response);
})

classroomsRouter.put('/:id', (request, response) => {
    return editClassroomController.handle(request, response);
})


export { classroomsRouter };
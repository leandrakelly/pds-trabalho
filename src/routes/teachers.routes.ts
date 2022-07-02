import { Router } from 'express';

import { createTeacherController } from '../modules/createTeacher/CreateTeacherFactory';

const teachersRouter = Router();

teachersRouter.post('/', (request, response) => {
    return createTeacherController.handle(request, response);
});

export { teachersRouter };
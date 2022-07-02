import { Request, Response, Router } from 'express';

import { classroomsRouter } from './classrooms.routes';
import { coursesRouter } from './courses.routes';
import { teachersRouter } from './teachers.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({message: "home"});
})

routes.use('/courses', coursesRouter);
routes.use('/classrooms', classroomsRouter);
routes.use('/teachers', teachersRouter);
routes.use('/users', usersRouter);

export { routes };
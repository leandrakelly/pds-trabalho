import { Router } from 'express';

import { createUserController } from '../modules/createUser/CreateUserFactory';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

export { usersRouter };
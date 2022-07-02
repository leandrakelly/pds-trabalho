import { Router } from 'express';

import { createUserController } from '../modules/createUser/CreateUserFactory';
import { editUserController } from '../modules/editUser/EditUserFactory';
import { listUsersController } from '../modules/listUsers/ListUsersFactory';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

usersRouter.get('/', (request, response) => {
    return listUsersController.handle(request, response);
})

usersRouter.put('/:id', (request, response) => {
    return editUserController.handle(request, response);
})

export { usersRouter };
import { Router } from 'express';

import { createUserController } from '../modules/createUser/CreateUserFactory';
import { deleteUserController } from '../modules/deleteUser/DeleteUserFactory';
import { editUserController } from '../modules/editUser/EditUserFactory';
import { findUserByIdController } from '../modules/findUserById/FindUserByIdFactory';
import { listUsersController } from '../modules/listUsers/ListUsersFactory';

const usersRouter = Router();

usersRouter.post('/', (request, response) => {
    return createUserController.handle(request, response);
});

usersRouter.get('/', (request, response) => {
    return listUsersController.handle(request, response);
})

usersRouter.get('/:id', (request, response) => {
    return findUserByIdController.handle(request, response);
})

usersRouter.put('/:id', (request, response) => {
    return editUserController.handle(request, response);
})

usersRouter.delete('/:id', (request, response) => {
    return deleteUserController.handle(request, response);
})

export { usersRouter };
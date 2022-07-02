import { Request, Response } from 'express';

import { ListUsersService } from './ListUsersService';

export class ListUsersController {
    constructor(private listUsersService: ListUsersService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        try {
            const users = await this.listUsersService.execute();

            return response.status(200).json(users);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
import { Request, Response } from 'express';

import { DeleteUserService } from './DeleteUserService';

export class DeleteUserController {
    constructor(private deleteUserService: DeleteUserService) {}

    async handle (request: Request, response: Response) {
        try {
            const { id } = request.params;

            await this.deleteUserService.execute(id);

            return response.status(200).json({ message: `User ${id} deleted!`});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
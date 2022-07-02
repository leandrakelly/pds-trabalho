import { Request, Response } from 'express';

import { FindUserByIdService } from './FindUserByIdService';

export class FindUserByIdController {
    constructor(private findUserByIdService: FindUserByIdService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const user = await this.findUserByIdService.execute(id);

            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
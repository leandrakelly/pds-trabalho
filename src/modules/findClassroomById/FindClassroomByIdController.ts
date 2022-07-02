import { Request, Response } from 'express';

import { FindClassroomByIdService } from './FindClassroomByIdService';

export class FindClassroomByIdController {
    constructor(private findClassroomByIdService: FindClassroomByIdService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const classroom = await this.findClassroomByIdService.execute(id);

            return response.status(200).json(classroom);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
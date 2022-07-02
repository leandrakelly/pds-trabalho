import { Request, Response } from 'express';

import { DeleteTeacherService } from './DeleteTeacherService';


export class DeleteTeacherController {
    constructor(private deleteTeacherService: DeleteTeacherService) {}

    async handle (request: Request, response: Response) {
        try {
            const { id } = request.params;

            await this.deleteTeacherService.execute(id);

            return response.status(200).json({ message: `Teacher ${id} deleted!`});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
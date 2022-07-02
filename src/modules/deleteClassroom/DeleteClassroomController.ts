import { Request, Response } from 'express';

import { DeleteClassroomService } from './DeleteClassroomService';

export class DeleteClassroomController {
    constructor(private deleteClassroomService: DeleteClassroomService) {}

    async handle (request: Request, response: Response) {
        try {
            const { id } = request.params;

            await this.deleteClassroomService.execute(id);

            return response.status(200).json({ message: `Classroom ${id} deleted!`});
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
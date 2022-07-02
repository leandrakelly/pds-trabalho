import { Request, Response } from 'express';

import { IEditClassroomDTO } from './EditClassroomDTO';
import { EditClassroomService } from './EditClassroomService';

export class EditClassroomController {
    constructor(private editClassroomService: EditClassroomService) {}

    async handle (request: Request, response: Response) {
        const { id } = request.params;
        const data: IEditClassroomDTO = request.body;

        try {
            const classroom = await this.editClassroomService.execute(id, data);

            return response.status(200).json(classroom);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
import { Request, Response } from 'express';

import { IEditTeacherDTO } from './EditTeacherDTO';
import { EditTeacherService } from './EditTeacherService';

export class EditTeacherController {
    constructor(private editTeacherService: EditTeacherService) {}

    async handle (request: Request, response: Response) {
        const { id } = request.params;
        const data: IEditTeacherDTO = request.body;

        try {
            const teacher = await this.editTeacherService.execute(id, data);

            return response.status(200).json(teacher);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
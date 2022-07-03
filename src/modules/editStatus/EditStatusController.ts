import { Request, Response } from 'express';

import { IEditStatusDTO } from './EditStatusDTO';
import { EditStatusService } from './EditStatusService';

export class EditStatusController {
    constructor(private editStatusService: EditStatusService) {}

    async handle (request: Request, response: Response) {
        const { id } = request.params;
        const data: IEditStatusDTO = request.body;

        try {
            const course = await this.editStatusService.execute(id, data);

            return response.status(200).json(course);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
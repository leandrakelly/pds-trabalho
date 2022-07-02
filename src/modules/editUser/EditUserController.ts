import { Request, Response } from 'express';

import { IEditUserDTO } from './EditUserDTO';
import { EditUserService } from './EditUserService';

export class EditUserController {
    constructor(private editUserService: EditUserService) {}

    async handle (request: Request, response: Response) {
        const { id } = request.params;
        const data: IEditUserDTO = request.body;

        try {
            const user = await this.editUserService.execute(id, data);

            return response.status(200).json(user);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
import { Request, Response } from 'express';

import { FindTeacherByIdService } from './FindTeacherByIdService';


export class FindTeacherByIdController {
    constructor(private findTeacherByIdService: FindTeacherByIdService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        try {
            const teacher = await this.findTeacherByIdService.execute(id);

            return response.status(200).json(teacher);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
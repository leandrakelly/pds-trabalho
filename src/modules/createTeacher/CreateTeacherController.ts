import { Request, Response } from 'express';

import { ICreateTeacherDTO } from './CreateTeacherDTO';
import { CreateTeacherService } from './createTeacherService';


export class CreateTeacherController {
    constructor(private createTeacherService: CreateTeacherService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const data: ICreateTeacherDTO = request.body;

        try {
            const teacher = await this.createTeacherService.execute(data);

            return response.status(201).json(teacher);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
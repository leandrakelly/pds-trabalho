import { Request, Response } from 'express';

import { ICreateClassroomDTO } from './createClassroomDTO';
import { CreateClassroomService } from './CreateClassroomService';

export class CreateClassroomController {
    constructor(private createClassroomService: CreateClassroomService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const data: ICreateClassroomDTO = request.body;

        try {
            const classrooom = await this.createClassroomService.execute(data);

            return response.status(201).json(classrooom);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
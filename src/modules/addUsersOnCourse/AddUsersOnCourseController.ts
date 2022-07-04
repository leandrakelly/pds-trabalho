import { Request, Response } from 'express';

import { IAddUsersOnCourseDTO } from './AddUsersOnCourseDTO';
import { AddUsersOnCourseService } from './AddUsersOnCourseService';

export class AddUsersOnCourseController {
    constructor(private addUsersOnCourseService: AddUsersOnCourseService) {}

    async handle (request: Request, response: Response) {
        const data: IAddUsersOnCourseDTO = request.body;

        try {
            const course = await this.addUsersOnCourseService.execute(data);

            return response.status(200).json(course);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
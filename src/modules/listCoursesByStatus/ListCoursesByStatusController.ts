import { Request, Response } from 'express';

import { CourseStatus } from '../../entities/Course';
import { ListCoursesByStatusService } from './ListCoursesByStatusService';

export class ListCoursesByStatusController {
    constructor(private listCoursesByStatusService: ListCoursesByStatusService) {}

    async handle (request: Request, response: Response): Promise<Response> {
        const status = request.params.status as CourseStatus;
        try {
            const courses = await this.listCoursesByStatusService.execute(status);

            return response.status(200).json(courses);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
import { Request, Response } from 'express';

import { ICreateUserDTO } from './createUserDTO';
import { CreateUserService } from './CreateUserService';

export class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    async handle (request: Request, response: Response) : Promise<Response> {
        const data: ICreateUserDTO = request.body;

        try {
            const user = await this.createUserService.execute(data);

            return response.status(201).json(user);
        } catch (err) {
            return response.status(400).json({ message: err.message || 'Unexpected error.'})
        }
    }
}
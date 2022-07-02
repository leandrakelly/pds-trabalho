import { IUsersRepository } from '../../repositories/IUsersRepository';

export class DeleteUserService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute (id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
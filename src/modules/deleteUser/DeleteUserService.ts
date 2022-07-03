import { IUsersRepository } from '../../repositories/IUsersRepository';

export class DeleteUserService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute (id: string): Promise<void> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error('User does not exist!');
        }
        await this.usersRepository.delete(id);
    }
}
import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class FindUserByIdService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute (id: string): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error('User does not exist!');
        }

        return user;
    }
}
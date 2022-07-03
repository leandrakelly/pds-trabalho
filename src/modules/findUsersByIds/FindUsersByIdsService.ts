import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

export class FindUsersByIdsService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute (ids: string[]): Promise<User[]> {
        const users = await this.usersRepository.findByIds(ids);

        return users;
    }
}
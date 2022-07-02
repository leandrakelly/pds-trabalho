import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IEditUserDTO } from './EditUserDTO';

export class EditUserService {
    constructor(private usersRepository: IUsersRepository) {}

    async execute(id: string, data: IEditUserDTO): Promise<User> {
        const user = await this.usersRepository.findById(id);

        if (!user) {
            throw new Error('User does not exist!');
        }

        user.email = data.email;
        user.password = data.password;
        user.role = data.role;

        await this.usersRepository.update(user);

        return user;
    }
}
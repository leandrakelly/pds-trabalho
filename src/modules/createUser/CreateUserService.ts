import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ICreateUserDTO } from './createUserDTO';


export class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(data: ICreateUserDTO) {
    return await this.usersRepository.save(data);
  }
}

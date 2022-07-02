import { User } from '../entities/User';
import { ICreateUserDTO } from '../modules/createUser/createUserDTO';

export interface IUsersRepository{
    save(data: ICreateUserDTO): Promise<User>;
    list(): Promise<User[]>;
    findById(id: string): Promise<User>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}
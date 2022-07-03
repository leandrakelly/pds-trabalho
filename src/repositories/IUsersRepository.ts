import { User } from '../entities/User';
import { ICreateUserDTO } from '../modules/createUser/CreateUserDTO';

export interface IUsersRepository{
    save(data: ICreateUserDTO): Promise<User>;
    list(): Promise<User[]>;
    findById(id: string): Promise<User>;
    findByIds(ids: string[]): Promise<User[]>;
    update(user: User): Promise<void>;
    delete(id: string): Promise<void>;
}
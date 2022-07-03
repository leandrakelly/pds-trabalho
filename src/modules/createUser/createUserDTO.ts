import { UserRole } from '../../entities/User';

export interface ICreateUserDTO {
    email: string;
    password: string;
    role: UserRole;
    courses_ids: string[];
}
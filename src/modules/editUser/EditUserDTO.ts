import { UserRole } from '../../entities/User';

export interface IEditUserDTO {
    email: string;
    password: string;
    role: UserRole;
}
import { Teacher } from '../entities/Teacher';
import { ICreateTeacherDTO } from '../modules/createTeacher/createTeacherDTO';


export interface ITeachersRepository{
    save(data: ICreateTeacherDTO): Promise<Teacher>;
    list(): Promise<Teacher[]>;
    findByIds(ids: string[]): Promise<Teacher[]>;
    update(teacher: Teacher): Promise<void>;
    delete(id: string): Promise<void>;
}
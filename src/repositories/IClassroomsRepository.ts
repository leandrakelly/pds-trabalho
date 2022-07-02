import { Classroom } from '../entities/Classroom';
import { ICreateClassroomDTO } from '../modules/createClassroom/createClassroomDTO';

export interface IClassroomsRepository{
    save(data: ICreateClassroomDTO): Promise<Classroom>;
    list(): Promise<Classroom[]>;
    findByIds(ids: string[]): Promise<Classroom[]>;
    update(classroom: Classroom): Promise<void>;
    delete(id: string): Promise<void>;
}
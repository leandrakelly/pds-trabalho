import { IClassroomsRepository } from '../../repositories/IClassroomsRepository';
import { ICreateClassroomDTO } from './createClassroomDTO';

export class CreateClassroomService {
  constructor(private coursesRepository: IClassroomsRepository) {}

  async execute(data: ICreateClassroomDTO) {
    return await this.coursesRepository.save(data);
  }
}

import { ITeachersRepository } from '../../repositories/ITeachersRepository';
import { ICreateTeacherDTO } from './CreateTeacherDTO';

export class CreateTeacherService {
  constructor(private teachersRepository: ITeachersRepository) {}

  async execute(data: ICreateTeacherDTO) {
    return await this.teachersRepository.save(data);
  }
}

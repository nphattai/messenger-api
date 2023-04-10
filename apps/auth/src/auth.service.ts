import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers() {
    return this.userRepository.find();
  }

  async createUser() {
    const user = await this.userRepository.create({ name: 'test' });

    await this.userRepository.save(user);

    return { user };
  }
}

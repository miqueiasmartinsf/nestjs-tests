import { Inject, Injectable } from '@nestjs/common';
import { IUserService } from './interfaces/IUserService';
import { User } from 'src/models/User';
import { IUserRepository } from './interfaces/IUserRepository';
import { UserSchema } from 'src/database/schemas/user.entity';

@Injectable()
export class UserService implements IUserService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) {}

    async findAll(): Promise<UserSchema[]> {
        const users = await this.userRepository.findAll();
        return users;
    }
}

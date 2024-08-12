import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './interfaces/IAuthService';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { IUserRepository } from 'src/user/interfaces/IUserRepository';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
    ) {}

    async login(userData: LoginDTO): Promise<string> {
        return 'user created with sucess';
    }

    async register(userData: RegisterDTO): Promise<void> {
        await this.userRepository.create(userData);
    }

    async deleteAll(): Promise<void> {
        await this.userRepository.delete();
    }
}

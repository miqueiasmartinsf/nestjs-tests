import { Inject, Injectable } from '@nestjs/common';
import { IAuthService } from './interfaces/IAuthService';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { IUserRepository } from 'src/user/interfaces/IUserRepository';
import { User } from 'src/models/User';
import { sign } from 'jsonwebtoken';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService implements IAuthService {
    constructor(
        @Inject('IUserRepository')
        private readonly userRepository: IUserRepository,
        private readonly configService: ConfigService,
    ) {}

    async login(userData: LoginDTO): Promise<string> {
        return 'user created with sucess';
    }

    async register(userData: RegisterDTO): Promise<void> {
        const user = new User({
            email: userData.email,
            name: userData.name,
            password: userData.password,
        });

        const jwtSecret = this.configService.get<string>('JWT_SECRET');

        user.refreshToken = sign(user.id, jwtSecret);

        await this.userRepository.create(user);
    }

    async deleteAll(): Promise<void> {
        await this.userRepository.delete();
    }
}

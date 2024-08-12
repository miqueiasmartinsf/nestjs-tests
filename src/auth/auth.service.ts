import { Injectable } from '@nestjs/common';
import { IAuthService } from './interfaces/IAuthService';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';

@Injectable()
export class AuthService implements IAuthService {
    async login(userData: LoginDTO): Promise<string> {
        return 'user created with sucess';
    }
    async register(userData: RegisterDTO): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

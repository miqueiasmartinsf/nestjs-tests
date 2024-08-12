import { Body, Controller, Post } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { IAuthService } from './interfaces/IAuthService';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    async login(@Body() userData: LoginDTO) {}

    @Post('/register')
    async register(@Body() userData: RegisterDTO) {
        const response = await this.authService.register(userData);

        return response;
    }
}

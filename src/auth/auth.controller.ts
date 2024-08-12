import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { LoginDTO } from './dtos/login.dto';
import { RegisterDTO } from './dtos/register.dto';
import { IAuthService } from './interfaces/IAuthService';

@Controller('auth')
export class AuthController {
    constructor(
        @Inject('IAuthService') private readonly authService: IAuthService,
    ) {}

    @Post('/login')
    async login(@Body() userData: LoginDTO) {}

    @Get('/asd')
    async asd() {
        return '123';
    }

    @Post('/register')
    async register(@Body() userData: RegisterDTO) {
        const response = await this.authService.register(userData);

        return response;
    }
}

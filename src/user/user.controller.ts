import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { IUserService } from './interfaces/IUserService';

@Controller('users')
export class UserController {
    constructor(
        @Inject('IUserService') private readonly userService: IUserService,
    ) {}

    @Get()
    async findAll() {
        console.log(22222222223);
        const res = await this.userService.findAll();
        return res;
    }
}

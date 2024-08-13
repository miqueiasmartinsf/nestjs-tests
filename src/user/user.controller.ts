import { Controller, Get, Inject, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { IUserService } from './interfaces/IUserService';

@Controller('user')
export class UserController {
    constructor(
        @Inject('IUserService') private readonly userService: IUserService,
    ) {}

    @Get()
    async findAll() {
        const res = await this.userService.findAll();
        return res;
    }
}

import { RegisterDTO } from 'src/auth/dtos/register.dto';
import { IUserRepository } from './interfaces/IUserRepository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository implements IUserRepository {
    findAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    finById(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    create(userData: RegisterDTO): Promise<void> {
        return;
    }

    update(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

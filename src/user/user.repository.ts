import { RegisterDTO } from 'src/auth/dtos/register.dto';
import { IUserRepository } from './interfaces/IUserRepository';
import { Injectable } from '@nestjs/common';
import { UserSchema } from 'src/database/schemas/user.entity';
import { User } from 'src/models/User';

@Injectable()
export class UserRepository implements IUserRepository {
    findAll(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    finById(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async findByEmail(email: string): Promise<void> {
        const userExists = UserSchema.findOne({
            where: { email },
        });
    }

    async create(userData: RegisterDTO): Promise<User> {
        const user = new User({
            email: userData.email,
            password: userData.password,
        });

        await UserSchema.create({
            user,
        });

        return user;
    }

    update(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    delete(): Promise<void> {
        throw new Error('Method not implemented.');
    }
}

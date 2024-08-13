import { RegisterDTO } from 'src/auth/dtos/register.dto';
import { IUserRepository } from './interfaces/IUserRepository';
import { Injectable } from '@nestjs/common';
import { UserSchema } from 'src/database/schemas/user.entity';
import { User } from 'src/models/User';

@Injectable()
export class UserRepository implements IUserRepository {
    findAll(): Promise<UserSchema[]> {
        throw new Error('Method not implemented.');
    }
    finById(): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async findByEmail(email: string): Promise<User | void> {
        const userExists = await UserSchema.findOne({
            where: { email },
        });

        if (userExists) {
            return new User({
                name: userExists.name,
                id: userExists.id,
                email: userExists.email,
                password: userExists.password,
            });
        }

        return;
    }

    async create(userData: User): Promise<User> {
        const user = await UserSchema.create({
            id: userData.id,
            name: userData.name,
            email: userData.email,
            password: userData.password,
            refreshToken: userData.refreshToken,
        });

        await user.save();

        return user;
    }

    update(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    async delete(): Promise<void> {
        await UserSchema.destroy({ where: {}, truncate: true });
    }
}

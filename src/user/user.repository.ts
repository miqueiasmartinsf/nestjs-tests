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
        const userExists = UserSchema.findAll({
            where: { email },
        });
    }

    async create(userData: RegisterDTO): Promise<User> {
        // const user = new User({
        //     email: userData.email,
        //     password: userData.password,
        // });

        const user = await UserSchema.create({
            name: userData.name,
            email: userData.email,
            password: userData.password,
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

import { IsEmail, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validations/unique-email';
import { Unique } from 'sequelize-typescript';

export class RegisterDTO {
    @IsString()
    name: string;

    @IsUniqueEmail({ message: 'User already exists' })
    @IsEmail()
    email: string;

    @MinLength(5)
    password: string;
}

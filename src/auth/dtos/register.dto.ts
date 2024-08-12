import { IsEmail, IsString, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validations/unique-email';

export class RegisterDTO {
    @IsString()
    name: string;

    @IsEmail()
    @IsUniqueEmail({ message: 'User already exists' })
    email: string;

    @MinLength(5)
    password: string;
}

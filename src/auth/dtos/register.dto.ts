import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDTO {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @MinLength(5)
    password: string;
}

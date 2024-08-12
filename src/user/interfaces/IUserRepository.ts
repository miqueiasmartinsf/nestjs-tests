import { RegisterDTO } from 'src/auth/dtos/register.dto';

export interface IUserRepository {
    findAll(): Promise<void>;

    finById(): Promise<void>;

    create(userData: RegisterDTO): Promise<void>;

    update(): Promise<void>;

    delete(): Promise<void>;
}

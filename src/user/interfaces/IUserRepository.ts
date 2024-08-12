import { RegisterDTO } from 'src/auth/dtos/register.dto';
import { User } from 'src/models/User';

export interface IUserRepository {
    findAll(): Promise<void>;

    finById(): Promise<void>;

    findByEmail(email: string): Promise<User | void>;

    create(userData: User): Promise<User>;

    update(): Promise<void>;

    delete(): Promise<void>;
}

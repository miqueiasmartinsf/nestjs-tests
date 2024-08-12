import { RegisterDTO } from '../dtos/register.dto';
import { LoginDTO } from '../dtos/login.dto';

export interface IAuthService {
    login(userData: LoginDTO): Promise<string>;

    register(userData: RegisterDTO): Promise<void>;

    deleteAll(): Promise<void>;
}

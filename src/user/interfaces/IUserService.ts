import { UserSchema } from 'src/database/schemas/user.entity';
import { User } from 'src/models/User';

export interface IUserService {
    findAll(): Promise<UserSchema[]>;
}

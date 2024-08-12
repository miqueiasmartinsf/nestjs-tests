import { randomUUID } from 'crypto';

interface IUserData {
    id?: string;
    email: string;
    password: string;
}

export class User {
    id?: string;
    email: string;
    password: string;

    constructor(userData: IUserData) {
        this.id = userData.id ?? randomUUID();
        this.email = userData.email;
        this.password = userData.password;
    }
}

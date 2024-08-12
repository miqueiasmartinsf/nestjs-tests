import { randomUUID } from 'crypto';

interface IUserData {
    id?: string;
    name: string;
    email: string;
    password: string;
    refreshToken?: string;
}

export class User {
    id?: string;
    name: string;
    email: string;
    password: string;
    refreshToken?: string;

    constructor(userData: IUserData) {
        this.id = userData.id ?? randomUUID();
        this.email = userData.email;
        this.name = userData.name;
        this.password = userData.password;
        this.refreshToken = userData.refreshToken;
    }
}

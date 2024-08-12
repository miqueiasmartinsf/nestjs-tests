import { Column, Table, Model } from 'sequelize-typescript';

@Table({ timestamps: true, tableName: 'users' })
export class UserSchema extends Model {
    @Column({ primaryKey: true })
    id: string;

    @Column
    name: string;

    @Column({ unique: true, allowNull: false })
    email: string;

    @Column
    password: string;

    @Column({ unique: true })
    refreshToken: string;
}

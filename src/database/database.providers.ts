import { Sequelize } from 'sequelize-typescript';
import { UserSchema } from 'src/database/schemas/user.entity';

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                database: 'ecommerce-db',
            });
            sequelize.addModels([UserSchema]);
            await sequelize.sync();
            return sequelize;
        },
    },
];

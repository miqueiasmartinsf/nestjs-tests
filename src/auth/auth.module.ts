import { forwardRef, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { UniqueEmailValidator } from './validations/unique-email';
import { ConfigService } from '@nestjs/config';

@Module({
    imports: [UserModule],
    controllers: [AuthController],
    providers: [
        { useClass: AuthService, provide: 'IAuthService' },
        UniqueEmailValidator,
    ],
})
export class AuthModule {}

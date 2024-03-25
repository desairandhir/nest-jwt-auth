import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { LocalStrategy } from './local.strategy';
import { UserModule } from 'src/user/user.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [PassportModule, UserModule,
        JwtModule.register({
            secret: "secret",
            signOptions: { expiresIn: '60s' }
        })],
    controllers: [],
    providers: [LocalStrategy, AuthService, JwtStrategy],
    exports: [AuthService]
})
export class AuthModule { }


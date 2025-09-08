import { Module } from '@nestjs/common';
import { HashingService } from './hashing/hashing.service';
import { BcryptService } from './hashing/bcrypt.service';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationController } from './authentication/authentication.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';
import { AccessTokenGuard } from './authentication/guards/access-token.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]), 
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig)
  ],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService
    },
    {
      provide: APP_GUARD,
      useClass: AuthenticationGuard
    },
    BcryptService,
    AccessTokenGuard,
    AuthenticationService
  ],
  exports: [
    HashingService,
    BcryptService
  ],
  controllers: [AuthenticationController]
})
export class IamModule { }

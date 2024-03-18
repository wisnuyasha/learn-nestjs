import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersPrismaModule } from './users-prisma/users-prisma.module';

@Module({
  imports: [UsersModule, PrismaModule, UsersPrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

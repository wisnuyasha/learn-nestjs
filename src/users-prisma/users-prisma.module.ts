import { Module } from '@nestjs/common';
import { UsersPrismaService } from './users-prisma.service';
import { UsersPrismaController } from './users-prisma.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  // import prisma modul to access prisma service
  imports: [PrismaModule],
  controllers: [UsersPrismaController],
  providers: [UsersPrismaService],
})
export class UsersPrismaModule {}

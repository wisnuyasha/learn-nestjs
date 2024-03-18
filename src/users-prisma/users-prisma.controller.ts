import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersPrismaService } from './users-prisma.service';
import { Prisma } from '@prisma/client';

@Controller('users-prisma')
export class UsersPrismaController {
  constructor(private readonly usersPrismaService: UsersPrismaService) {}

  @Post()
  create(@Body() createUsersPrismaDto: Prisma.UsersWithPrismaCreateInput) {
    return this.usersPrismaService.create(createUsersPrismaDto);
  }

  @Get()
  findAll(@Query('role') role?: 'ADMIN' | 'CUSTOMER' | 'DEVELOPER') {
    return this.usersPrismaService.findAll(role);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.usersPrismaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUsersPrismaDto: Prisma.UsersWithPrismaUpdateInput,
  ) {
    return this.usersPrismaService.update(+id, updateUsersPrismaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.usersPrismaService.remove(+id);
  }
}

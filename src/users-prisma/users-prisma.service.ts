import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersPrismaService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createUsersPrismaDto: Prisma.UsersWithPrismaCreateInput) {
    return await this.prismaService.usersWithPrisma.create({
      data: createUsersPrismaDto,
    });
  }

  async findAll(role: 'ADMIN' | 'CUSTOMER' | 'DEVELOPER') {
    return await this.prismaService.usersWithPrisma.findMany({
      where: {
        role,
      },
    });
  }

  async findOne(id: number) {
    const user = await this.prismaService.usersWithPrisma.findUnique({
      where: {
        id,
      },
    });
    if (!user) throw new NotFoundException('User Not FOund');
    return user;
  }

  async update(
    id: number,
    updateUsersPrismaDto: Prisma.UsersWithPrismaUpdateInput,
  ) {
    await this.findOne(id);
    return await this.prismaService.usersWithPrisma.update({
      where: {
        id,
      },
      data: updateUsersPrismaDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return await this.prismaService.usersWithPrisma.delete({
      where: {
        id,
      },
    });
  }
}

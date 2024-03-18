import { Test, TestingModule } from '@nestjs/testing';
import { UsersPrismaController } from './users-prisma.controller';
import { UsersPrismaService } from './users-prisma.service';

describe('UsersPrismaController', () => {
  let controller: UsersPrismaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersPrismaController],
      providers: [UsersPrismaService],
    }).compile();

    controller = module.get<UsersPrismaController>(UsersPrismaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

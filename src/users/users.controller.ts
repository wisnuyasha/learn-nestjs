import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, roles } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // get all users w/ query
  @Get()
  findAll(@Query('role') role?: roles) {
    return this.usersService.findAll(role);
  }

  // get all users/admins
  // ensure to add nested route above 'get by id' / dynamic route (:id)
  @Get('admins')
  findAllAdmins() {
    return this.usersService.findAllAdmins();
  }

  // get by users by id
  @Get(':id')
  // ParseIntPipe transforms/parse any string to int value
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  // create user
  @Post(':id')
  create(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  // update user by id
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return { id, updateUserDto };
  }

  // delete user by id
  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}

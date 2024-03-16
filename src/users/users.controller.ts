import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  // get all users
  @Get()
  findAll(): [] {
    return [];
  }

  // get all users/admins w/ query
  // ensure to add nested route above 'get by id'
  @Get('admins')
  findAllAdmins(@Query('role') role?: 'one' | 'two' | 'three') {
    return [];
  }

  // get by users by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  // create user
  @Post()
  create(@Body() user: {}) {
    return user;
  }

  // update user by id
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatedUser: {}) {
    return { id, updatedUser };
  }

  // delete user by id
  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}

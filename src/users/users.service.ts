import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, roles } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  // static users
  private users = [
    { id: 1, name: 'inu', email: 'inu@mail.com', role: 'developer' },
    { id: 2, name: 'ira', email: 'ira@mail.com', role: 'admin' },
    { id: 3, name: 'moli', email: 'moli@mail.com', role: 'customer' },
  ];

  // returns all or filtered by role users
  findAll(role?: roles) {
    const userByRole = role
      ? this.users.filter((user) => user.role === role)
      : this.users;
    if (role && !userByRole) throw new NotFoundException('User Role Not Found');
    return userByRole;
  }

  // returns all admin users
  findAllAdmins() {
    return this.users.filter((user) => user.role === 'admin');
  }

  // returns a user by ID or throws if not found
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User ID Not Found');

    return user;
  }

  // Adds a new user and returns the updated list
  create(createUserDto: CreateUserDto) {
    const lastUserId = this.users[this.users.length - 1].id;
    const newUser = {
      id: lastUserId + 1,
      ...createUserDto,
    };
    this.users.push(newUser);

    return this.users;
  }

  // updates a user by id or throws if not found
  update(id: number, updateUserDto: UpdateUserDto) {
    let found = false;
    const updatedUser = this.users.filter((user) => {
      if (user.id === id) {
        found = true;
        return { ...user, ...updateUserDto };
      }
      return user;
    });

    if (!found) throw new NotFoundException('User Id Not Found');

    this.users = updatedUser;
    return this.findOne(id);
  }
}

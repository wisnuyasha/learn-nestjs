import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';

export type roles = 'developer' | 'admin' | 'customer';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsEnum(['developer', 'admin', 'customer'], {
    message: 'invalid role',
  })
  role: roles;
}

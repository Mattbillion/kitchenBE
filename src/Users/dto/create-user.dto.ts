import { IsInt, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  img: string;

  @IsString()
  foodname: string;

  @IsInt()
  price: number;

  @IsString()
  desc: string;
}

import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    document: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsStrongPassword()
    @IsString()
    @IsNotEmpty()
    password: string;
}

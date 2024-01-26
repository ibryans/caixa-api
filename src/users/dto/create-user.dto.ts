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

    @IsStrongPassword({
        minLength: 8,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 1
    })
    @IsString()
    @IsNotEmpty()
    password: string;
}

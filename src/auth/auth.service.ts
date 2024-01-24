import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly usersService: UsersService
    ) {}

    validateUser(email: string, password: string) {
        
    }

    async login(credentials) {
        const user = await this.usersService.findByEmail(credentials.email)
        const hashedPassword = await hash(credentials.password, 10)

        // Se a senha não bater, retorna um erro
        if (user?.password != hashedPassword) {
            throw new UnauthorizedException()
        }

        // Gerar o JWT aqui
        // Retornar para o usuário
    }

}

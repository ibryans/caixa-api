import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly usersService: UsersService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email)
        
        // Se a senha bater, retorna o usuário encontrado
        if (user) {
            const isValidPass = await compare(password, user.password)
            if (isValidPass)
                return {...user, password: undefined}
        }

        // Se o usuário não for encontrado ou a senha estiver incorreta, retorna erro
        throw new Error('Email ou senha informados estão incorretos!')
    }

    async login(credentials) {
        return this.validateUser(credentials.email, credentials.password)
        // Gerar o JWT aqui
        // Retornar para o usuário
    }

}

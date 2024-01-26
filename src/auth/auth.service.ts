import { Injectable, UnauthorizedException } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { UserPayload } from './models/UserPayload';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

export interface UserToken {
    user: User,
    accessToken: string
}

@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService,
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService
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

    login(user: User): UserToken {
        const payload: UserPayload = {
            sub: user.id,
            email: user.email,
            document: user.document,
            name: user.name
        }

        // Gerar o JWT aqui
        const accessToken = this.jwtService.sign(payload)

        // Retornar para o usuário
        return { user, accessToken }
    }

}

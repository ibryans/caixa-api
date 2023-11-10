import { Controller, Get, Post } from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getUsers(): string {
        return 'Todos os usuários'
    }

    @Post()
    createUser() {
        return 'Criação de um usuário'
    }
    
}

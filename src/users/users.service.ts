import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService) {}

  // Criação de um usuário
  create(createUserDto: CreateUserDto) {
    return this.prismaService.user.create({
      data: createUserDto
    })
  }

  // Retorna uma lista com todos os usuários
  findAll() {
    return this.prismaService.user.findMany({
      orderBy: {created_at: 'desc'}
    })
  }

  // Retorna um usuário baseado em seu id
  findOne(id: number) {
    return this.prismaService.user.findUniqueOrThrow({
      where: {id: id}
    })
  }

  // Atualiza qualquer informação do usuário
  update(id: number, updateUserDto: UpdateUserDto) {
    return this.prismaService.user.update({
      where: {id: id},
      data: updateUserDto
    });
  }

  // Remove um usuário do banco
  remove(id: number) {
    return this.prismaService.user.delete({
      where: {id}
    });
  }
}
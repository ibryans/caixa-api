import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

import { hash } from 'bcrypt';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService) {}

  // Regsitro de um usuário utilizando bcrypt
  async register(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto, 
      password: await hash(createUserDto.password, 10)
    }
    const response = await this.prismaService.user.create({ data })
    const createdUser = {...response, password: undefined}
    return createdUser;
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

  // Retorna usuário pelo email
  findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: {email}
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

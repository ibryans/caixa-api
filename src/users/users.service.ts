import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {

  constructor(private prismaService: PrismaService) {}

  // Criação de um usuário
  async create(createUserDto: CreateUserDto) {
    return await this.prismaService.user.create({
      data: createUserDto
    })
  }

  // Retorna uma lista com todos os usuários
  async findAll() {
    return await this.prismaService.user.findMany({
      orderBy: {created_at: 'desc'}
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}

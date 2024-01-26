import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SalesService {

  constructor(private prismaService: PrismaService) {}

  create(createSaleDto: CreateSaleDto) {
    return this.prismaService.sale.create({
      data: createSaleDto
    });
  }

  findAll(user_id?: number) {
    return (user_id)
    ? this.prismaService.sale.findMany({ where: {user_id}, orderBy: {created_at: 'desc'} })
    : this.prismaService.sale.findMany();
  }

  findOne(id: number) {
    return this.prismaService.sale.findUniqueOrThrow({
      where: {id}
    });
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return this.prismaService.sale.update({
      where: {id},
      data: updateSaleDto
    });
  }

  remove(id: number) {
    return this.prismaService.sale.delete({
      where: {id}
    });
  }
}

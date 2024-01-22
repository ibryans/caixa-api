import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';

@Injectable()
export class PaymentMethodService {

    constructor(private prismaService: PrismaService) {}

    async create(data: CreatePaymentMethodDto) {
        return await this.prismaService.payment_method.create({ 
            data 
        });
    }

    async findAll() {
        return await this.prismaService.payment_method.findMany();
    }

    async findOne(id: number) {
        return await this.prismaService.payment_method.findUniqueOrThrow({
            where: {id}
        })
    }

    async update(id: number, data: UpdatePaymentMethodDto) {
        return await this.prismaService.payment_method.update({
            where: {id},
            data
        })
    }

}

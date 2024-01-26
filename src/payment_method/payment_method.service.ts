import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';

@Injectable()
export class PaymentMethodService {

    constructor(private prismaService: PrismaService) {}

    create(data: CreatePaymentMethodDto) {
        return this.prismaService.payment_method.create({ 
            data 
        });
    }

    findAll() {
        return this.prismaService.payment_method.findMany();
    }

    findOne(id: number) {
        return this.prismaService.payment_method.findUniqueOrThrow({
            where: {id}
        })
    }

    update(id: number, data: UpdatePaymentMethodDto) {
        return this.prismaService.payment_method.update({
            where: {id},
            data
        })
    }

}

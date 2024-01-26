import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @Post()
  create(@Body() body: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(body)
  }

  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdatePaymentMethodDto) {
    return this.paymentMethodService.update(+id, body);
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { PaymentMethodModule } from './payment_method/payment_method.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [UsersModule, PrismaModule, PaymentMethodModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SalesService } from 'src/sales/sales.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, SalesService],
  exports: [UsersService]
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SalesService } from 'src/sales/sales.service';
import { User } from './entities/user.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, SalesService, User],
  exports: [UsersService]
})
export class UsersModule {}

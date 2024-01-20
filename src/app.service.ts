import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Array<any> {
    return [{
      name: 'Bryan',
      email: 'bso.compras@gmail.com'
    }]
  }
}

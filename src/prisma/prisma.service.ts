import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'


@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    
    // Ao instanciar o modulo, será feita a conexão com o banco de dados
    async onModuleInit() {
        await this.$connect();
    }

    // Evento de quando acaba o processo do prisma
    // Mata a aplicação do nest para evitar vazamento de memória
    // enableShutdownHooks(app: INestApplication) {
    //     this.$on('beforeExit', async() => {
    //         await app.close();
    //     })
    // }
}

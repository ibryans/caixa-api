import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitando o CORS para minha aplicação
  app.enableCors({
    allowedHeaders: 'content-type',
    origin: 'http://localhost:5173',
    credentials: true
  })

  app.useGlobalPipes(new ValidationPipe({}))

  await app.listen(3000);

}
bootstrap();

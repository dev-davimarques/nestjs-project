import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remove chaves que não estão no DTO
      forbidNonWhitelisted: true, // mostrar erro quando a chave não existir
      transform: false, // tenta transformar os tipos de dados de param para dtos
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(//pipe a nivel app
    new ValidationPipe({
      whitelist: true,//solo deja la data del dto
      forbidNonWhitelisted: true,// expone una excepcion cuando se envian propiedades que no existen dentro de la request
      })
  )
  await app.listen(3000);
}
bootstrap();

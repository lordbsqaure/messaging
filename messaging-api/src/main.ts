import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Removes unexpected fields
      transform: true, // Converts types automatically
      forbidNonWhitelisted: true, // Throws error if extra fields are sent
      stopAtFirstError: true,
    }),
  );
  const config = new DocumentBuilder()
    .setTitle('Travel pay')
    .setDescription('This is the Api for bus transportation application')
    .setVersion('1.0')
    .addTag('Travel pay API ')
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(4000);
}
bootstrap();

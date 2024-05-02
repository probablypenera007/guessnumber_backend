import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.enableCors({
    origin: 'http://localhost:3000',  
    allowedHeaders: 'Content-Type, Accept',
  });
  
  await app.listen(3001);
}
bootstrap();

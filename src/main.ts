import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: 'http://localhost:3000',  
    allowedHeaders: 'Content-Type, Accept',
    methods: 'GET,POST,PUT,DELETE,OPTIONS', 
    credentials: true, 
  });
  
  await app.listen(3001, () => console.log(`Server running on http://localhost:3001`));
}
bootstrap();

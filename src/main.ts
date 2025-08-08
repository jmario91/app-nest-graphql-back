import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // ✅ Habilitar CORS para permitir solicitudes desde el frontend (Next.js)
  app.enableCors({
    origin: 'http://localhost:3000', // o usa "*" para permitir todos
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

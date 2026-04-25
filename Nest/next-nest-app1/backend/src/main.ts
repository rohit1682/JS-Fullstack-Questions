import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const port = Number(config.get<string>('PORT') ?? 3001);
  const corsOrigin = config.get<string>('CORS_ORIGIN') ?? '*';
  const swaggerPath = config.get<string>('SWAGGER_PATH') ?? 'docs';

  app.enableCors({ origin: corsOrigin });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('CSV Upload API')
    .setDescription('Upload a CSV file, validate rows, and receive valid rows + errors.')
    .setVersion('1.0.0')
    .addTag('CSV')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
  logger.log(`Backend running on http://localhost:${port}`);
  logger.log(`Swagger docs available at http://localhost:${port}/${swaggerPath}`);
}

bootstrap().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('Failed to start application', err);
  process.exit(1);
});

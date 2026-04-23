import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { validateEnv } from './config/env.validation';
import { LoggerModule } from './common/logger/logger.module';
import { AllExceptionsFilter } from './common/filters/http-exception.filter';
import { CompaniesModule } from './modules/companies/companies.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [configuration],
      validate: validateEnv,
      envFilePath: ['.env'],
    }),
    LoggerModule,
    CompaniesModule,
  ],
  providers: [AllExceptionsFilter],
})
export class AppModule {}

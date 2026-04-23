import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { buildWinstonOptions } from './winston.config';

@Module({
  imports: [
    WinstonModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) =>
        buildWinstonOptions(config.get<string>('app.logLevel') ?? 'info'),
    }),
  ],
  exports: [WinstonModule],
})
export class LoggerModule {}

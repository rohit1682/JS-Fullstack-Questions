import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CsvModule } from './csv/csv.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    CsvModule,
  ],
})
export class AppModule {}

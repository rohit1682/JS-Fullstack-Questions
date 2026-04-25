import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CsvRowDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  name!: string;

  @ApiProperty({ example: 25, minimum: 18, maximum: 100 })
  @Type(() => Number)
  @IsNumber()
  @Min(18)
  @Max(100)
  age!: number;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'Engineering', required: false })
  @IsString()
  @IsOptional()
  department?: string;
}

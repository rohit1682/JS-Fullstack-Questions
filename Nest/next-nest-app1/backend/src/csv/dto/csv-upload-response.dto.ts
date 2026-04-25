import { ApiProperty } from '@nestjs/swagger';
import { CsvRowDto } from './csv-row.dto';

export class CsvRowErrorDto {
  @ApiProperty({ example: 3, description: 'Row number (1-based, excluding header)' })
  row!: number;

  @ApiProperty({
    type: [String],
    example: ['name should not be empty', 'email must be an email'],
  })
  issues!: string[];
}

export class CsvUploadResponseDto {
  @ApiProperty({ type: [CsvRowDto] })
  valid!: CsvRowDto[];

  @ApiProperty({ type: [CsvRowErrorDto] })
  errors!: CsvRowErrorDto[];
}

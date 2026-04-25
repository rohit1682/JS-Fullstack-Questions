import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import * as Papa from 'papaparse';
import { CsvRowDto } from './dto/csv-row.dto';
import {
  CsvRowError,
  CsvUploadResult,
  CsvValidRow,
  RawCsvRow,
} from './interfaces/csv.interface';

@Injectable()
export class CsvService {
  private readonly logger = new Logger(CsvService.name);

  parseAndValidate(file: Express.Multer.File): CsvUploadResult {
    if (!file) {
      this.logger.warn('Upload attempted with no file');
      throw new BadRequestException('No file uploaded. Field name must be "file".');
    }

    if (!this.isAcceptedCsv(file)) {
      this.logger.warn(
        `Rejected file "${file.originalname}" with mimetype "${file.mimetype}"`,
      );
      throw new BadRequestException('Only CSV files are accepted');
    }

    this.logger.log(
      `Parsing file "${file.originalname}" (${file.size ?? file.buffer.length} bytes)`,
    );

    const csvText = file.buffer.toString('utf8');
    const parsed = Papa.parse<RawCsvRow>(csvText, {
      header: true,
      skipEmptyLines: 'greedy',
      dynamicTyping: false,
      transformHeader: (header) => header.trim(),
    });

    if (parsed.errors.length > 0) {
      this.logger.error(
        `papaparse failed with ${parsed.errors.length} error(s) for "${file.originalname}"`,
      );
      throw new BadRequestException({
        message: 'Failed to parse CSV',
        errors: parsed.errors,
      });
    }

    const valid: CsvValidRow[] = [];
    const errors: CsvRowError[] = [];

    parsed.data.forEach((row, index) => {
      const ageRaw = row.age;
      const normalized = {
        name: typeof row.name === 'string' ? row.name.trim() : '',
        age:
          ageRaw === undefined || ageRaw === null || ageRaw === ''
            ? Number.NaN
            : Number(ageRaw),
        email: typeof row.email === 'string' ? row.email.trim() : '',
        department:
          typeof row.department === 'string' && row.department.trim().length > 0
            ? row.department.trim()
            : undefined,
      };

      const dto = plainToInstance(CsvRowDto, normalized);
      const validationErrors = validateSync(dto, {
        whitelist: true,
        forbidNonWhitelisted: true,
      });

      if (validationErrors.length > 0) {
        errors.push({
          row: index + 1,
          issues: this.extractMessages(validationErrors),
        });
        return;
      }

      valid.push(dto as CsvValidRow);
    });

    this.logger.log(
      `Parsed "${file.originalname}": ${valid.length} valid, ${errors.length} invalid`,
    );

    return { valid, errors };
  }

  private extractMessages(validationErrors: ValidationError[]): string[] {
    return validationErrors.flatMap((error) => Object.values(error.constraints ?? {}));
  }

  private isAcceptedCsv(file: Express.Multer.File): boolean {
    const allowedMime = new Set([
      'text/csv',
      'application/csv',
      'application/vnd.ms-excel',
      'text/plain',
      'application/octet-stream',
      '',
    ]);
    const mimeOk = allowedMime.has(file.mimetype ?? '');
    const extOk = (file.originalname ?? '').toLowerCase().endsWith('.csv');
    return mimeOk || extOk;
  }
}

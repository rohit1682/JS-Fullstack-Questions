/// <reference types="multer" />
import { BadRequestException, Injectable } from '@nestjs/common';
import * as Papa from 'papaparse';
import { ParsedCsvResult } from './dto/parsed-csv-result.dto';

type MulterFile = Express.Multer.File;

@Injectable()
export class UploadService {
  parseCsv(file: MulterFile): ParsedCsvResult {
    if (!file) {
      throw new BadRequestException('No file uploaded. Field name must be "file".');
    }

    const csv = file.buffer.toString('utf8');
    const result = Papa.parse(csv, {
      header: true,
      skipEmptyLines: true,
      dynamicTyping: true,
    });

    if (result.errors?.length) {
      throw new BadRequestException({
        message: 'Failed to parse CSV',
        errors: result.errors,
      });
    }

    return {
      filename: file.originalname,
      rowCount: result.data.length,
      fields: result.meta.fields ?? [],
      data: result.data as Record<string, unknown>[],
    };
  }
}

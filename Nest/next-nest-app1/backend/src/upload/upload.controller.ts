import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
/// <reference types="multer" />
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { ParsedCsvResult } from './dto/parsed-csv-result.dto';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file: Express.Multer.File): ParsedCsvResult {
    return this.uploadService.parseCsv(file);
  }
}

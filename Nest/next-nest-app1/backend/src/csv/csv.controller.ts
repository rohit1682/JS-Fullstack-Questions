import {
  Controller,
  Logger,
  ParseFilePipeBuilder,
  Post,
  UploadedFile,
  UseInterceptors,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiConsumes,
  ApiCreatedResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from './csv.service';
import { CsvUploadResponseDto } from './dto/csv-upload-response.dto';
import type { CsvUploadResult } from './interfaces/csv.interface';

@ApiTags('CSV')
@Controller('upload')
export class CsvController {
  private readonly logger = new Logger(CsvController.name);

  constructor(private readonly csvService: CsvService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload a CSV file and validate each row' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: { type: 'string', format: 'binary' },
      },
      required: ['file'],
    },
  })
  @ApiCreatedResponse({
    description: 'CSV parsed and validated successfully',
    type: CsvUploadResponseDto,
  })
  @ApiBadRequestResponse({ description: 'Invalid or missing CSV file' })
  @UseInterceptors(FileInterceptor('file'))
  uploadCsv(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addMaxSizeValidator({ maxSize: 5 * 1024 * 1024 })
        .build({
          fileIsRequired: true,
          errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        }),
    )
    file: Express.Multer.File,
  ): CsvUploadResult {
    this.logger.log(`Received upload: ${file.originalname} (${file.size} bytes)`);
    return this.csvService.parseAndValidate(file);
  }
}

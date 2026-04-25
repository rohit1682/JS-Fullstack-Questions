import { Test, TestingModule } from '@nestjs/testing';
import { CsvController } from './csv.controller';
import { CsvService } from './csv.service';
import { BadRequestException } from '@nestjs/common';
import type { CsvUploadResult } from './interfaces/csv.interface';

describe('CsvController', () => {
  let controller: CsvController;
  const csvServiceMock = {
    parseAndValidate: jest.fn<CsvUploadResult, [Express.Multer.File]>(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CsvController],
      providers: [
        {
          provide: CsvService,
          useValue: csvServiceMock,
        },
      ],
    }).compile();

    controller = module.get<CsvController>(CsvController);
    jest.clearAllMocks();
  });

  it('returns service response for uploaded file', () => {
    const file = {
      originalname: 'sample.csv',
      size: 100,
      mimetype: 'text/csv',
      buffer: Buffer.from(''),
    } as Express.Multer.File;
    const serviceResponse: CsvUploadResult = {
      valid: [{ name: 'John', age: 25, email: 'john@example.com', department: 'Engineering' }],
      errors: [],
    };

    csvServiceMock.parseAndValidate.mockReturnValue(serviceResponse);

    const result = controller.uploadCsv(file);

    expect(csvServiceMock.parseAndValidate).toHaveBeenCalledWith(file);
    expect(result).toEqual(serviceResponse);
  });

  it('propagates BadRequestException from the service', () => {
    const file = {
      originalname: 'broken.csv',
      size: 10,
      mimetype: 'text/csv',
      buffer: Buffer.from(''),
    } as Express.Multer.File;

    csvServiceMock.parseAndValidate.mockImplementation(() => {
      throw new BadRequestException('Failed to parse CSV');
    });

    expect(() => controller.uploadCsv(file)).toThrow(BadRequestException);
  });
});

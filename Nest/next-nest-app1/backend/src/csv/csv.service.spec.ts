import { BadRequestException } from '@nestjs/common';
import { CsvService } from './csv.service';

describe('CsvService', () => {
  let service: CsvService;

  beforeEach(() => {
    service = new CsvService();
  });

  it('parses CSV and separates valid rows from errors', () => {
    const csv = [
      'name,age,email,department',
      'John,25,john@example.com,Engineering',
      'Jane,30,jane@example.com,Marketing',
      'Invalid,,not-an-email,',
    ].join('\n');

    const file = {
      buffer: Buffer.from(csv, 'utf8'),
      originalname: 'sample.csv',
      size: csv.length,
      mimetype: 'text/csv',
    } as Express.Multer.File;

    const result = service.parseAndValidate(file);

    expect(result.valid).toEqual([
      {
        name: 'John',
        age: 25,
        email: 'john@example.com',
        department: 'Engineering',
      },
      {
        name: 'Jane',
        age: 30,
        email: 'jane@example.com',
        department: 'Marketing',
      },
    ]);

    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].row).toBe(3);
    expect(result.errors[0].issues).toEqual(
      expect.arrayContaining(['age must not be less than 18', 'email must be an email']),
    );
  });

  it('throws when no file is uploaded', () => {
    expect(() => service.parseAndValidate(undefined as unknown as Express.Multer.File)).toThrow(
      BadRequestException,
    );
  });
});

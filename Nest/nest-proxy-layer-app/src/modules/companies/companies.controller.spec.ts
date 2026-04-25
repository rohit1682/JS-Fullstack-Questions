import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from 'winston';
import { CompaniesController } from './companies.controller';
import { CompaniesService } from './companies.service';
import { Company } from './interfaces/company.interface';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

describe('CompaniesController', () => {
  let controller: CompaniesController;
  let service: CompaniesService;
  let logger: Logger;

  const mockCompanyData: Company[] = [
    {
      id: 1,
      name: 'Romaguera-Crona',
      email: 'Sincere@april.biz',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      address: {
        street: 'Kulas Light',
        city: 'Gwenborough',
        zipcode: '92998-3874',
      },
    },
    {
      id: 2,
      name: 'Deckow-Crist',
      email: 'Shanna@melissa.tv',
      phone: '9012589482',
      website: 'anastasia.net',
      address: {
        street: 'Hoeger Mall',
        city: 'Wisokyburgh',
        zipcode: '90566-7771',
      },
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [
        {
          provide: CompaniesService,
          useValue: {
            getCompanies: jest.fn(),
            getCompanyById: jest.fn(),
          },
        },
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: {
            info: jest.fn(),
            debug: jest.fn(),
            error: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<CompaniesController>(CompaniesController);
    service = module.get<CompaniesService>(CompaniesService);
    logger = module.get<Logger>(WINSTON_MODULE_PROVIDER);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCompanies', () => {
    it('should return an array of companies', async () => {
      const getCompaniesSpy = jest
        .spyOn(service, 'getCompanies')
        .mockResolvedValue(mockCompanyData);

      const result = await controller.getCompanies();

      expect(result).toEqual(mockCompanyData);
      expect(getCompaniesSpy).toHaveBeenCalled();
      expect(logger.info).toHaveBeenCalled();
    });

    it('should handle empty list of companies', async () => {
      const getCompaniesSpy = jest
        .spyOn(service, 'getCompanies')
        .mockResolvedValue([]);

      const result = await controller.getCompanies();

      expect(result).toEqual([]);
      expect(getCompaniesSpy).toHaveBeenCalled();
    });

    it('should log the request', async () => {
      jest.spyOn(service, 'getCompanies').mockResolvedValue(mockCompanyData);

      await controller.getCompanies();

      expect(logger.info).toHaveBeenCalledWith(
        expect.stringContaining('GET /api/companies'),
      );
    });
  });

  describe('getCompanyById', () => {
    it('should return a single company by ID', async () => {
      const getCompanyByIdSpy = jest
        .spyOn(service, 'getCompanyById')
        .mockResolvedValue(mockCompanyData[0]);

      const result = await controller.getCompanyById(1);

      expect(result).toEqual(mockCompanyData[0]);
      expect(getCompanyByIdSpy).toHaveBeenCalledWith(1);
      expect(logger.info).toHaveBeenCalled();
    });

    it('should handle different company IDs', async () => {
      const getCompanyByIdSpy = jest
        .spyOn(service, 'getCompanyById')
        .mockResolvedValue(mockCompanyData[1]);

      const result = await controller.getCompanyById(2);

      expect(result).toEqual(mockCompanyData[1]);
      expect(getCompanyByIdSpy).toHaveBeenCalledWith(2);
    });

    it('should pass the correct company ID to service', async () => {
      const getCompanyByIdSpy = jest
        .spyOn(service, 'getCompanyById')
        .mockResolvedValue(mockCompanyData[0]);

      await controller.getCompanyById(5);

      expect(getCompanyByIdSpy).toHaveBeenCalledWith(5);
    });

    it('should log the request with company ID', async () => {
      jest
        .spyOn(service, 'getCompanyById')
        .mockResolvedValue(mockCompanyData[0]);

      await controller.getCompanyById(1);

      expect(logger.info).toHaveBeenCalledWith(
        expect.stringContaining('GET /api/companies/1'),
      );
    });

    it('should handle service errors gracefully', async () => {
      const error = new Error('Service error');
      const getCompanyByIdSpy = jest
        .spyOn(service, 'getCompanyById')
        .mockRejectedValue(error);

      await expect(controller.getCompanyById(999)).rejects.toThrow(error);
      expect(getCompanyByIdSpy).toHaveBeenCalledWith(999);
    });

    it('should handle request for large company ID', async () => {
      const getCompanyByIdSpy = jest
        .spyOn(service, 'getCompanyById')
        .mockRejectedValue(new Error('Not Found'));

      await expect(controller.getCompanyById(99999)).rejects.toThrow(
        'Not Found',
      );
      expect(getCompanyByIdSpy).toHaveBeenCalledWith(99999);
    });
  });

  describe('Request Logging', () => {
    it('should log all requests to getCompanies', async () => {
      jest.spyOn(service, 'getCompanies').mockResolvedValue(mockCompanyData);

      await controller.getCompanies();

      expect(logger.info).toHaveBeenCalledWith(
        expect.stringContaining('Fetching all companies'),
      );
    });

    it('should log all requests to getCompanyById with ID', async () => {
      jest
        .spyOn(service, 'getCompanyById')
        .mockResolvedValue(mockCompanyData[0]);

      await controller.getCompanyById(3);

      expect(logger.info).toHaveBeenCalledWith(
        expect.stringContaining('Fetching company by ID'),
      );
    });
  });
});

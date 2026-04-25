import {
  afterEach,
  beforeEach,
  describe,
  expect,
  it,
  jest,
} from '@jest/globals';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { HttpException, HttpStatus } from '@nestjs/common';
import { of, throwError } from 'rxjs';
import {
  AxiosError,
  AxiosHeaders,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { Logger } from 'winston';
import { CompaniesService } from './companies.service';
import { Company } from './interfaces/company.interface';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';

describe('CompaniesService', () => {
  let service: CompaniesService;
  let httpService: HttpService;
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

  const mockConfig = {
    baseUrl: 'https://jsonplaceholder.typicode.com',
    timeoutMs: 10000,
  };

  const createAxiosResponse = <T>(data: T): AxiosResponse<T> => ({
    data,
    status: 200,
    statusText: 'OK',
    headers: {},
    config: {
      headers: new AxiosHeaders(),
    } as InternalAxiosRequestConfig,
  });

  const createAxiosError = (
    message: string,
    status: number,
    data: unknown,
  ): AxiosError =>
    new AxiosError(
      message,
      undefined,
      undefined,
      undefined,
      createAxiosResponse(data),
    );

  const expectHttpException = async (
    promise: Promise<unknown>,
    expectedStatus: number,
  ): Promise<HttpException> => {
    const error = await promise.catch((error_: unknown) => error_);

    expect(error).toBeInstanceOf(HttpException);

    if (!(error instanceof HttpException)) {
      throw new TypeError('Expected HttpException');
    }

    expect(error.getStatus()).toBe(expectedStatus);
    return error;
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CompaniesService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn((key: string) => {
              if (key === 'externalApi.baseUrl') {
                return mockConfig.baseUrl;
              }
              if (key === 'externalApi.timeoutMs') {
                return mockConfig.timeoutMs;
              }
              return null;
            }),
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

    service = module.get<CompaniesService>(CompaniesService);
    httpService = module.get<HttpService>(HttpService);
    logger = module.get<Logger>(WINSTON_MODULE_PROVIDER);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getCompanies', () => {
    it('should return an array of companies', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      mockHttpServiceGet.mockReturnValue(
        of(createAxiosResponse(mockCompanyData)),
      );

      const result = await service.getCompanies();

      expect(result).toEqual(mockCompanyData);
      expect(mockHttpServiceGet).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users',
        {
          timeout: 10000,
        },
      );
      expect(logger.info).toHaveBeenCalled();
      expect(logger.debug).toHaveBeenCalled();
    });

    it('should return empty array when no companies are returned', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      mockHttpServiceGet.mockReturnValue(of(createAxiosResponse(null)));

      const result = await service.getCompanies();

      expect(result).toEqual([]);
    });

    it('should handle 502 Bad Gateway error', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = createAxiosError('Network Error', 502, {
        error: 'Bad Gateway',
      });
      axiosError.response = {
        ...createAxiosResponse({ error: 'Bad Gateway' }),
        status: 502,
        statusText: 'Bad Gateway',
      };

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      await expect(service.getCompanies()).rejects.toThrow(HttpException);
      await expectHttpException(service.getCompanies(), HttpStatus.BAD_GATEWAY);
    });

    it('should handle 500 Internal Server Error', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = createAxiosError('Server Error', 500, {
        error: 'Internal Server Error',
      });
      axiosError.response = {
        ...createAxiosResponse({ error: 'Internal Server Error' }),
        status: 500,
        statusText: 'Internal Server Error',
      };

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      await expect(service.getCompanies()).rejects.toThrow(HttpException);
    });

    it('should use correct base URL', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      mockHttpServiceGet.mockReturnValue(
        of(createAxiosResponse(mockCompanyData)),
      );

      await service.getCompanies();

      expect(mockHttpServiceGet).toHaveBeenCalledWith(
        expect.stringContaining('jsonplaceholder.typicode.com'),
        expect.objectContaining({ timeout: 10000 }),
      );
    });
  });

  describe('getCompanyById', () => {
    it('should return a single company', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      mockHttpServiceGet.mockReturnValue(
        of(createAxiosResponse(mockCompanyData[0])),
      );

      const result = await service.getCompanyById(1);

      expect(result).toEqual(mockCompanyData[0]);
      expect(mockHttpServiceGet).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/1',
        {
          timeout: 10000,
        },
      );
      expect(logger.info).toHaveBeenCalled();
      expect(logger.debug).toHaveBeenCalled();
    });

    it('should handle 404 Not Found error', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = createAxiosError('Not Found', 404, {
        error: 'Not Found',
      });
      axiosError.response = {
        ...createAxiosResponse({ error: 'Not Found' }),
        status: 404,
        statusText: 'Not Found',
      };

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      await expect(service.getCompanyById(999)).rejects.toThrow(HttpException);
      await expectHttpException(
        service.getCompanyById(999),
        HttpStatus.NOT_FOUND,
      );
    });

    it('should use correct URL with company ID', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      mockHttpServiceGet.mockReturnValue(
        of(createAxiosResponse(mockCompanyData[0])),
      );

      await service.getCompanyById(5);

      expect(mockHttpServiceGet).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users/5',
        expect.objectContaining({ timeout: 10000 }),
      );
    });

    it('should handle network errors gracefully', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = new AxiosError('Network timeout');

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      await expect(service.getCompanyById(1)).rejects.toThrow(HttpException);
      await expectHttpException(
        service.getCompanyById(1),
        HttpStatus.BAD_GATEWAY,
      );
    });
  });

  describe('Error Handling', () => {
    it('should log errors with correct information', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = createAxiosError('Connection Error', 503, {
        error: 'Service Unavailable',
      });
      axiosError.response = {
        ...createAxiosResponse({ error: 'Service Unavailable' }),
        status: 503,
        statusText: 'Service Unavailable',
      };

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      await expect(service.getCompanies()).rejects.toThrow(HttpException);

      expect(logger.error).toHaveBeenCalled();
    });

    it('should throw HttpException with proper structure', async () => {
      const mockHttpServiceGet = jest.spyOn(httpService, 'get');
      const axiosError = createAxiosError('API Error', 502, {
        error: 'Bad Gateway',
      });
      axiosError.response = {
        ...createAxiosResponse({ error: 'Bad Gateway' }),
        status: 502,
        statusText: 'Bad Gateway',
      };

      mockHttpServiceGet.mockReturnValue(throwError(() => axiosError));

      const error = await expectHttpException(
        service.getCompanies(),
        HttpStatus.BAD_GATEWAY,
      );
      const response = error.getResponse();

      expect(typeof response).toBe('object');
      expect(response).not.toBeNull();

      if (typeof response === 'object' && response !== null) {
        expect(response).toHaveProperty('statusCode');
        expect(response).toHaveProperty('message');
        expect(response).toHaveProperty('error');
      }
    });
  });
});

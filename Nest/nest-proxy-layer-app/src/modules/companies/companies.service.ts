import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Logger } from 'winston';
import { Company } from './interfaces/company.interface';

@Injectable()
export class CompaniesService {
  private readonly baseUrl: string;
  private readonly timeoutMs: number;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.baseUrl = this.configService.get<string>(
      'externalApi.baseUrl',
    ) as string;
    this.timeoutMs = this.configService.get<number>(
      'externalApi.timeoutMs',
    ) as number;
  }

  /**
   * Fetch all companies from external API
   */
  async getCompanies(): Promise<Company[]> {
    const url = `${this.baseUrl}/users`;

    this.logger.info('Fetching companies from external API', { url });

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<Company[]>(url, {
          timeout: this.timeoutMs,
        }),
      );

      this.logger.debug('Companies fetched successfully', {
        count: data?.length,
      });

      return data || [];
    } catch (error) {
      this.handleAxiosError(error, url);
    }
  }

  /**
   * Fetch a single company by ID from external API
   */
  async getCompanyById(id: number): Promise<Company> {
    const url = `${this.baseUrl}/users/${id}`;

    this.logger.info('Fetching company from external API', { url, id });

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<Company>(url, {
          timeout: this.timeoutMs,
        }),
      );

      this.logger.debug('Company fetched successfully', { id });

      return data;
    } catch (error) {
      this.handleAxiosError(error, url);
    }
  }

  /**
   * Handle Axios errors and throw appropriate HTTP exceptions
   */
  private handleAxiosError(error: unknown, url: string): never {
    const axiosError = error as AxiosError;
    const status = axiosError?.response?.status ?? HttpStatus.BAD_GATEWAY;
    const responseData = axiosError?.response?.data;

    this.logger.error('Failed to fetch from external API', {
      url,
      status,
      message: axiosError?.message,
      response: responseData,
    });

    throw new HttpException(
      {
        statusCode:
          status >= 400 && status < 600 ? status : HttpStatus.BAD_GATEWAY,
        message: 'Failed to fetch companies from external API',
        error: 'Bad Gateway',
      },
      status >= 400 && status < 600 ? status : HttpStatus.BAD_GATEWAY,
    );
  }
}

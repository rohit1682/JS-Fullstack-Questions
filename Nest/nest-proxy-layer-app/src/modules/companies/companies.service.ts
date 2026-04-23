import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Logger } from 'winston';
import { BigCommerceConfig } from '../../config/configuration';
import { CompaniesResponseDto } from './dto/company.dto';
import { GetCompaniesQuery } from './dto/get-companies.query';

@Injectable()
export class CompaniesService {
  private readonly bigCommerce: BigCommerceConfig;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {
    this.bigCommerce =
      this.configService.getOrThrow<BigCommerceConfig>('bigCommerce');
  }

  async getCompanies(
    query: GetCompaniesQuery = {},
  ): Promise<CompaniesResponseDto> {
    const url = `${this.bigCommerce.baseUrl}/companies`;

    this.logger.info('Calling BigCommerce companies endpoint', {
      url,
      params: query,
    });

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<CompaniesResponseDto>(url, {
          params: query,
          headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': this.bigCommerce.authToken,
            'X-Store-Hash': this.bigCommerce.storeHash,
          },
          timeout: this.bigCommerce.timeoutMs,
        }),
      );

      this.logger.debug('BigCommerce companies response received', {
        code: data?.code,
        totalCount: data?.meta?.pagination?.totalCount,
        returned: data?.data?.length,
      });

      return data;
    } catch (error) {
      this.handleAxiosError(error, url);
    }
  }

  private handleAxiosError(error: unknown, url: string): never {
    const axiosError = error as AxiosError;
    const status =
      axiosError?.response?.status ?? HttpStatus.BAD_GATEWAY;
    const responseData = axiosError?.response?.data;

    this.logger.error('BigCommerce request failed', {
      url,
      status,
      message: axiosError?.message,
      response: responseData,
    });

    throw new HttpException(
      {
        message: 'Failed to fetch companies from BigCommerce',
        upstreamStatus: status,
        upstreamError: responseData ?? axiosError?.message,
      },
      status >= 400 && status < 600 ? status : HttpStatus.BAD_GATEWAY,
    );
  }
}

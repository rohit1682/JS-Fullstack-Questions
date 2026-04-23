import { Controller, Get, Inject, Query } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { CompaniesService } from './companies.service';
import { CompaniesResponseDto } from './dto/company.dto';
import { GetCompaniesQuery } from './dto/get-companies.query';

@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get()
  async getCompanies(
    @Query() query: GetCompaniesQuery,
  ): Promise<CompaniesResponseDto> {
    this.logger.info('GET /companies', { query });
    return this.companiesService.getCompanies(query);
  }
}

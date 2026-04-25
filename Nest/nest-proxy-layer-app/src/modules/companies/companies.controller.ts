import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { CompaniesService } from './companies.service';
import { Company } from './interfaces/company.interface';

@ApiTags('Companies')
@Controller('companies')
export class CompaniesController {
  constructor(
    private readonly companiesService: CompaniesService,
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all companies' })
  @ApiResponse({
    status: 200,
    description: 'List of all companies',
  })
  @ApiResponse({
    status: 502,
    description: 'Failed to fetch companies from external API',
  })
  async getCompanies(): Promise<Company[]> {
    this.logger.info('GET /api/companies - Fetching all companies');
    return this.companiesService.getCompanies();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a single company by ID' })
  @ApiParam({
    name: 'id',
    description: 'Company ID',
    type: 'number',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Company details',
  })
  @ApiResponse({
    status: 404,
    description: 'Company not found',
  })
  @ApiResponse({
    status: 502,
    description: 'Failed to fetch company from external API',
  })
  async getCompanyById(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Company> {
    this.logger.info(`GET /api/companies/${id} - Fetching company by ID`);
    return this.companiesService.getCompanyById(id);
  }
}

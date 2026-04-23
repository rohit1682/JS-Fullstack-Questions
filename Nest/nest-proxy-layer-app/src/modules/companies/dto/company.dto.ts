export interface ParentCompanyDto {
  id: number | null;
  name: string;
}

export interface CompanyDto {
  companyId: number;
  companyName: string;
  bcGroupName: string;
  companyStatus: number;
  catalogId: number | null;
  catalogName: string | null;
  companyEmail: string;
  companyPhone: string;
  addressLine1: string;
  addressLine2: string | null;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  createdAt: number;
  updatedAt: number;
  uuid: string;
  priceListAssign: unknown[];
  bcGroupId: number;
  parentCompany: ParentCompanyDto;
}

export interface PaginationDto {
  totalCount: number;
  offset: number;
  limit: number;
}

export interface MetaDto {
  pagination: PaginationDto;
  message: string;
}

export interface CompaniesResponseDto {
  code: number;
  data: CompanyDto[];
  meta: MetaDto;
}

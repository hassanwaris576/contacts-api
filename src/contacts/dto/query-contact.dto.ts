import { ApiPropertyOptional, } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, IsString,  Max, Min } from 'class-validator';
import { ContactStatusDto } from './create-contact.dto';

export enum ContactSortField {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  COMPANY = 'company',
  CREATED_AT = 'createdAt',
}

export enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

export class QueryContactDto {
  @ApiPropertyOptional({
    example: 'john',
    description:
      'Search by first name, last name, email, or company',
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiPropertyOptional({
    enum: ContactStatusDto,
    enumName: 'ContactStatus',
    example: ContactStatusDto.ACTIVE,
    description: 'Filter contacts by status',
  })
  @IsOptional()
  @IsEnum(ContactStatusDto)
  status?: ContactStatusDto;

  @ApiPropertyOptional({
    example: 'Acme',
    description: 'Filter contacts by company name',
  })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiPropertyOptional({
    enum: ContactSortField,
    enumName: 'ContactSortField',
    example: ContactSortField.CREATED_AT,
    default: ContactSortField.CREATED_AT,
    description: 'Field used to sort contacts',
  })
  @IsOptional()
  @IsEnum(ContactSortField)
  sortBy: ContactSortField = ContactSortField.CREATED_AT;

  @ApiPropertyOptional({
    enum: SortOrder,
    enumName: 'SortOrder',
    example: SortOrder.DESC,
    default: SortOrder.DESC,
    description: 'Sort direction',
  })
  @IsOptional()
  @IsEnum(SortOrder)
  sortOrder: SortOrder = SortOrder.DESC;

  @ApiPropertyOptional({
    example: 1,
    default: 1,
    minimum: 1,
    description: 'Page number',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({
    example: 20,
    default: 20,
    minimum: 1,
    maximum: 100,
    description: 'Number of contacts returned per page',
  })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  limit: number = 20;
}
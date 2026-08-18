import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

export enum ContactStatusDto {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export class CreateContactDto {
  @ApiProperty({
    example: 'John',
    description: 'Contact first name',
    maxLength: 100,
  })
  @IsString()
  @MaxLength(100)
  firstName!: string;

  @ApiProperty({
    example: 'Doe',
    description: 'Contact last name',
    maxLength: 100,
  })
  @IsString()
  @MaxLength(100)
  lastName!: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Unique contact email address',
    maxLength: 255,
  })
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiPropertyOptional({
    example: '+1 555 123 4567',
    description: 'Contact phone number',
    maxLength: 30,
  })
  @IsOptional()
  @IsString()
  @MaxLength(30)
  phone?: string;

  @ApiPropertyOptional({
    example: 'Acme Corporation',
    description: 'Company name',
    maxLength: 150,
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  company?: string;

  @ApiPropertyOptional({
    example: 'Software Engineer',
    description: 'Contact job title',
    maxLength: 150,
  })
  @IsOptional()
  @IsString()
  @MaxLength(150)
  jobTitle?: string;

  @ApiPropertyOptional({
    enum: ContactStatusDto,
    enumName: 'ContactStatus',
    example: ContactStatusDto.ACTIVE,
    description: 'Contact status',
  })
  @IsOptional()
  @IsEnum(ContactStatusDto)
  status?: ContactStatusDto;

  @ApiPropertyOptional({
    example: 'Important demo contact',
    description: 'Additional notes',
    maxLength: 1000,
  })
  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
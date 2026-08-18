import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse,ApiTags } from '@nestjs/swagger';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { QueryContactDto } from './dto/query-contact.dto';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  @ApiOperation({
    summary: 'Create a contact',
    description: 'Creates a new contact in the database.',
  })
  @ApiResponse({
    status: 201,
    description: 'Contact successfully created.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data.',
  })
  @ApiResponse({
    status: 409,
    description: 'A contact with this email already exists.',
  })
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiOperation({
    summary: 'Get contacts',
    description:
      'Returns a paginated list of contacts with optional search, filtering, and sorting.',
  })
  @ApiResponse({
    status: 200,
    description: 'Paginated list of contacts.',
  })
  findAll(@Query() query: QueryContactDto) {
    return this.contactsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a contact',
    description: 'Returns a single contact using its UUID.',
  })
  @ApiParam({
    name: 'id',
    description: 'Contact UUID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact successfully retrieved.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contact not found.',
  })
  findOne(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.contactsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Update a contact',
    description:
      'Updates one or more fields of an existing contact.',
  })
  @ApiParam({
    name: 'id',
    description: 'Contact UUID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact successfully updated.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid request data or UUID.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contact not found.',
  })
  @ApiResponse({
    status: 409,
    description: 'A contact with this email already exists.',
  })
  update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateContactDto: UpdateContactDto,
  ) {
    return this.contactsService.update(
      id,
      updateContactDto,
    );
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Delete a contact',
    description: 'Permanently deletes a contact.',
  })
  @ApiParam({
    name: 'id',
    description: 'Contact UUID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @ApiResponse({
    status: 200,
    description: 'Contact successfully deleted.',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID.',
  })
  @ApiResponse({
    status: 404,
    description: 'Contact not found.',
  })
  remove(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    return this.contactsService.remove(id);
  }
}
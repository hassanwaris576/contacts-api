# Contacts API

A production-style REST API for managing contacts, built with NestJS, PostgreSQL, and Prisma ORM.

The API provides complete contact CRUD operations along with search, filtering, sorting, pagination, validation, Swagger documentation, and API rate limiting.

## Tech Stack

- NestJS
- TypeScript
- PostgreSQL
- Prisma ORM
- Swagger / OpenAPI
- Class Validator
- Class Transformer
- Helmet
- CORS
- Jest
- ESLint
- Prettier

## Features

### Contact Management

- Create contacts
- Retrieve a single contact
- Retrieve contacts with pagination
- Update contacts
- Delete contacts

### Search

Search contacts by:

- First name
- Last name
- Email
- Company

### Filtering

Filter contacts by:

- Status
- Company

### Sorting

Sort contacts by:

- First name
- Last name
- Email
- Company
- Created date

Supports:

- Ascending
- Descending

### Pagination

Supports:

- Page number
- Page size
- Total records
- Total pages
- Next page indicator
- Previous page indicator

### Validation

Request validation is implemented using NestJS ValidationPipe and class-validator.

Invalid requests are rejected automatically.

### API Documentation

Interactive Swagger documentation is available at:

http://localhost:3000/api/docs

### Database

PostgreSQL is used as the relational database with Prisma ORM.

The project includes Prisma migrations and seed data for local development.

### Security

- Helmet security headers
- CORS configuration
- API rate limiting
- Request validation
- Environment-based configuration

# Project Structure

contacts-api/
│
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
│   └── seed.ts
│
├── src/
│   ├── contacts/
│   │   ├── dto/
│   │   │   ├── create-contact.dto.ts
│   │   │   ├── update-contact.dto.ts
│   │   │   └── query-contact.dto.ts
│   │   │
│   │   ├── contacts.controller.ts
│   │   ├── contacts.service.ts
│   │   └── contacts.module.ts
│   │
│   ├── prisma/
│   │   ├── prisma.module.ts
│   │   └── prisma.service.ts
│   │
│   ├── app.module.ts
│   └── main.ts
│
├── .env.example
├── .gitignore
├── package.json
├── prisma.config.ts
└── README.md


# Requirements
Before running the Project, Install
Node.js 20+
PostgreSQL 14+
npm 

# Local Postgresql Setup
Create a PostgreSQL database named:
contacts_db

Default PostgreSQL configuration:
Host: localhost
Port: 5432
Username: postgres
Database: contacts_db

# Database Setup
Run Prisma migrations:

npx prisma migrate dev
npx prisma generate
npm run prisma:seed
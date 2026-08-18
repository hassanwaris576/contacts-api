import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/client';
import { faker } from '@faker-js/faker';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const existingContacts = await prisma.contact.count();

  if (existingContacts > 0) {
    console.log(
      `Seed skipped. Database already contains ${existingContacts} contacts.`,
    );
    return;
  }

  const contacts = Array.from({ length: 500 }, () => ({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email().toLowerCase(),
    phone: faker.phone.number(),
    company: faker.company.name(),
    jobTitle: faker.person.jobTitle(),
    status: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE'] as const),
    notes: faker.lorem.sentence(),
  }));

  await prisma.contact.createMany({
    data: contacts,
    skipDuplicates: true,
  });

  console.log('Successfully seeded 500 contacts.');
}

main()
  .catch((error) => {
    console.error('Seed failed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
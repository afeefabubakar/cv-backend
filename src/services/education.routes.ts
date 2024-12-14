import { Education } from '@prisma/client';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function createEducation(profileId: string, data: Education) {
  return await prisma.education.create({
    data: {
      ...data,
      profileId,
    },
    select: {
      id: true,
    },
  });
}

const educationService = {
  createEducation,
};

export default educationService;

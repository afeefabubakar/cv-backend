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

async function updateEducation(id: string, data: Partial<Education>) {
  return await prisma.education.update({
    where: { id },
    data,
  });
}

async function deleteEducation(id: string) {
  return await prisma.education.delete({
    where: { id },
  });
}

const educationService = {
  createEducation,
  updateEducation,
  deleteEducation,
};

export default educationService;

import { PrismaClient, WorkExperience } from '@prisma/client';

const prisma = new PrismaClient();

async function addWorkExperience(profileId: string, data: WorkExperience) {
  return await prisma.workExperience.create({
    data: {
      ...data,
      profileId,
    },
    select: {
      id: true,
    },
  });
}

async function deleteWorkExperience(id: string) {
  return await prisma.workExperience.delete({
    where: { id },
  });
}

const workExperienceService = {
  addWorkExperience,
  deleteWorkExperience,
};

export default workExperienceService;

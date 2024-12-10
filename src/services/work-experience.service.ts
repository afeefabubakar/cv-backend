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

const workExperienceService = {
  addWorkExperience,
};

export default workExperienceService;

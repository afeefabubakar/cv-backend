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

async function updateWorkExperience(id: string, data: WorkExperience) {
  return await prisma.workExperience.update({
    where: {
      id,
    },
    data,
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
  updateWorkExperience,
  deleteWorkExperience,
};

export default workExperienceService;

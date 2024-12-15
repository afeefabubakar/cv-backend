import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getMisc(profileId: string) {
  return await prisma.misc.findMany({
    where: { profileId },
  });
}

async function createMisc(profileId: string, item: object) {
  return await prisma.misc.create({
    data: { profileId, item },
  });
}

async function deleteMisc(id: string) {
  return await prisma.misc.delete({
    where: { id },
  });
}

const miscService = {
  getMisc,
  createMisc,
  deleteMisc,
};

export default miscService;

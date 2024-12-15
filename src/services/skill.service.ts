import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

type GetSkillsQuery = {
  category?: string;
};

async function getSkills(query: GetSkillsQuery) {
  return await prisma.skill.findMany({
    where: {
      category: query.category,
    },
    orderBy: {
      skill: 'asc',
    },
    select: {
      id: true,
      skill: true,
    },
  });
}

async function createSkill(skill: string, category: string) {
  return await prisma.skill.create({
    data: {
      skill,
      category,
    },
  });
}

async function addProfileSkill(profileId: string, skillId: string) {
  return await prisma.profileSkill.create({
    data: {
      profileId,
      skillId,
      context: 'profile',
    },
  });
}

async function deleteProfileSkill(id: string) {
  return await prisma.profileSkill.delete({
    where: { id },
  });
}

async function deleteSkill(id: string) {
  await prisma.profileSkill.deleteMany({
    where: { skillId: id },
  });

  await prisma.educationSkill.deleteMany({
    where: { skillId: id },
  });

  await prisma.workSkill.deleteMany({
    where: { skillId: id },
  });

  return await prisma.skill.delete({
    where: { id },
  });
}

const skillService = {
  getSkills,
  createSkill,
  addProfileSkill,
  deleteProfileSkill,
  deleteSkill,
};

export default skillService;

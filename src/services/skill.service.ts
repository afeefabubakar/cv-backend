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

async function deleteSkill(id: string) {
  return await prisma.skill.delete({
    where: { id },
  });
}

const skillService = {
  createSkill,
  getSkills,
  deleteSkill,
};

export default skillService;

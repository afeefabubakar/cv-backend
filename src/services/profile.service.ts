import { PrismaClient, Profile } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllProfiles() {
  return await prisma.profile.findMany({
    select: {
      id: true,
      firstName: true,
      lastName: true,
    },
    orderBy: {
      updatedAt: 'asc',
    },
  });
}

async function getProfileById(id: string) {
  return await prisma.profile.findUnique({
    where: { id },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      jobTitle: true,
      email: true,
      phone: true,
      summary: true,
      location: {
        select: {
          id: true,
          name: true,
          state: {
            select: {
              id: true,
              name: true,
            },
          },
          country: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
      workExperiences: {
        orderBy: {
          startDate: 'desc',
        },
        include: {
          location: {
            include: {
              state: true,
              country: true,
            },
          },
        },
      },
      educations: {
        orderBy: {
          startDate: 'desc',
        },
        include: {
          location: {
            include: {
              state: true,
              country: true,
            },
          },
        },
      },
      ProfileSkill: {
        select: {
          id: true,
          skill: {
            select: {
              id: true,
              skill: true,
              category: true,
            },
          },
        },
      },
    },
  });
}

async function updateProfile(id: string, data: Partial<Profile>) {
  return await prisma.profile.update({
    where: { id },
    data,
  });
}

const userServices = {
  getAllProfiles,
  getProfileById,
  updateProfile,
};

export default userServices;

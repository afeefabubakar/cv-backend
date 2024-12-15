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
      locked: true,
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
      misc: true,
    },
  });
}

async function createProfile(data: Profile) {
  return await prisma.profile.create({
    data,
  });
}

async function setProfileLock(id: string) {
  const profile = await prisma.profile.findUnique({
    where: { id },
    select: { locked: true },
  });

  if (!profile) {
    throw new Error('Profile not found');
  }

  const { locked } = profile;

  return await prisma.profile.update({
    where: { id },
    data: { locked: !locked },
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
  createProfile,
  setProfileLock,
};

export default userServices;

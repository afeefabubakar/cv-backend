import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function getAllLocations() {
  const cities = await prisma.city.findMany({
    select: {
      id: true,
      name: true,
      stateId: true,
      countryId: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  const states = await prisma.state.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  const countries = await prisma.country.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      name: 'asc',
    },
  });

  const locations = {
    cities,
    states,
    countries,
  };

  return locations;
}

const locationService = {
  getAllLocations,
};

export default locationService;

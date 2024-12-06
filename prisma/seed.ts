import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const country = await prisma.country.create({
    data: {
      name: 'Malaysia',
      iso2: 'MY',
    },
  });

  const states = await prisma.state.createManyAndReturn({
    data: STATES_OF_MALAYSIA.map((state) => {
      return {
        name: state,
        countryId: country.id,
      };
    }),
  });

  const cities = await prisma.city.createManyAndReturn({
    data: CITIES_OF_MALAYSIA.map((city) => {
      const state = states.find((state) => state.name === city.admin_name) || {
        id: '',
      };
      return {
        name: city.city,
        countryId: country.id,
        stateId: state.id,
      };
    }),
  });

  const profile = await prisma.profile.create({
    data: {
      firstName: 'Afeef',
      lastName: 'bin Abu Bakar',
      email: 'contact@afeef.dev',
      jobTitle: 'Software Developer',
      phone: '+60 12-819 0553',
      summary:
        'Software engineer currently working for INVOKE Solutions with over a year of experience as a frontend developer, currently working towards achieving full-stack proficiency. Team-spirited and is valued as a person who can learn quickly on the job and proactively solve problems. As a passionate software engineer, I am always keen to learn and improve myself to keep up with the ever-changing technological landscape.',
      location: {
        connect: {
          id: cities.find((city) => city.name === 'Kuching')?.id,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

const STATES_OF_MALAYSIA = [
  'Johor',
  'Kedah',
  'Kelantan',
  'Melaka',
  'Negeri Sembilan',
  'Pahang',
  'Pulau Pinang',
  'Perak',
  'Perlis',
  'Sabah',
  'Sarawak',
  'Selangor',
  'Terengganu',
  'Labuan',
  'Kuala Lumpur',
  'Putrajaya',
];

const CITIES_OF_MALAYSIA = [
  {
    city: 'Kuala Lumpur',
    admin_name: 'Kuala Lumpur',
  },
  {
    city: 'Seberang Jaya',
    admin_name: 'Pulau Pinang',
  },
  {
    city: 'Klang',
    admin_name: 'Selangor',
  },
  {
    city: 'Ipoh',
    admin_name: 'Perak',
  },
  {
    city: 'George Town',
    admin_name: 'Pulau Pinang',
  },
  {
    city: 'Petaling Jaya',
    admin_name: 'Selangor',
  },
  {
    city: 'Kuantan',
    admin_name: 'Pahang',
  },
  {
    city: 'Shah Alam',
    admin_name: 'Selangor',
  },
  {
    city: 'Sungai Petani',
    admin_name: 'Kedah',
  },
  {
    city: 'Johor Bahru',
    admin_name: 'Johor',
  },
  {
    city: 'Kota Bharu',
    admin_name: 'Kelantan',
  },
  {
    city: 'Melaka',
    admin_name: 'Melaka',
  },
  {
    city: 'Kota Kinabalu',
    admin_name: 'Sabah',
  },
  {
    city: 'Seremban',
    admin_name: 'Negeri Sembilan',
  },
  {
    city: 'Sandakan',
    admin_name: 'Sabah',
  },
  {
    city: 'Kuching',
    admin_name: 'Sarawak',
  },
  {
    city: 'Kluang',
    admin_name: 'Johor',
  },
  {
    city: 'Muar',
    admin_name: 'Johor',
  },
  {
    city: 'Pasir Gudang',
    admin_name: 'Johor',
  },
  {
    city: 'Kuala Terengganu',
    admin_name: 'Terengganu',
  },
  {
    city: 'Sibu',
    admin_name: 'Sarawak',
  },
  {
    city: 'Taiping',
    admin_name: 'Perak',
  },
  {
    city: 'Kajang',
    admin_name: 'Selangor',
  },
  {
    city: 'Miri',
    admin_name: 'Sarawak',
  },
  {
    city: 'Teluk Intan',
    admin_name: 'Perak',
  },
  {
    city: 'Kulai',
    admin_name: 'Johor',
  },
  {
    city: 'Alor Setar',
    admin_name: 'Kedah',
  },
  {
    city: 'Bukit Mertajam',
    admin_name: 'Pulau Pinang',
  },
  {
    city: 'Lahad Datu',
    admin_name: 'Sabah',
  },
  {
    city: 'Segamat',
    admin_name: 'Johor',
  },
  {
    city: 'Tumpat',
    admin_name: 'Kelantan',
  },
  {
    city: 'Keningau',
    admin_name: 'Sabah',
  },
  {
    city: 'Batu Pahat',
    admin_name: 'Johor',
  },
  {
    city: 'Batu Gajah',
    admin_name: 'Perak',
  },
  {
    city: 'Tuaran',
    admin_name: 'Sabah',
  },
  {
    city: 'Bayan Lepas',
    admin_name: 'Pulau Pinang',
  },
  {
    city: 'Port Dickson',
    admin_name: 'Negeri Sembilan',
  },
  {
    city: 'Bintulu',
    admin_name: 'Sarawak',
  },
  {
    city: 'Tawau',
    admin_name: 'Sabah',
  },
  {
    city: 'Simanggang',
    admin_name: 'Sarawak',
  },
  {
    city: 'Labuan',
    admin_name: 'Labuan',
  },
  {
    city: 'Cukai',
    admin_name: 'Terengganu',
  },
  {
    city: 'Butterworth',
    admin_name: 'Pulau Pinang',
  },
  {
    city: 'Putrajaya',
    admin_name: 'Putrajaya',
  },
  {
    city: 'Taman Johor Jaya',
    admin_name: 'Johor',
  },
  {
    city: 'Kangar',
    admin_name: 'Perlis',
  },
];

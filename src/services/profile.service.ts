import ServicesClass from './ServicesClass';

export default class ProfileServices extends ServicesClass {
  constructor() {
    super();
  }

  async getAllProfiles() {
    return await this.prisma.profile.findMany({
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

  async getProfileById(id: string) {
    return await this.prisma.profile.findUnique({
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
            state: {
              select: {
                name: true,
              },
            },
            country: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
  }
}

import { PrismaClient } from '@prisma/client';

class ServicesClass {
  prisma;
  constructor() {
    this.prisma = new PrismaClient();
  }
}

export default ServicesClass;

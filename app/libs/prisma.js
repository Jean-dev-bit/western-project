// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;


import { PrismaClient } from "@prisma/client";

// Utiliser une variable globale en mode développement pour éviter
// la création répétée d'instances Prisma
const globalForPrisma = global;

const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

export default prisma;

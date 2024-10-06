import db from '@/prisma/db';

export async function findAthletes() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.athlete.findMany({ take: 100 });
}

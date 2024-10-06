import db from '@/prisma/db';

export async function findSports() {
  return db.sport.findMany();
}

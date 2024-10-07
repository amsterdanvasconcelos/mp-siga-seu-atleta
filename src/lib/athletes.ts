import db from '@/prisma/db';
import { Athlete } from '@prisma/client';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

export async function findAthletes() {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.athlete.findMany({
    take: 100,
    include: { sport: { select: { name: true } } },
  });
}

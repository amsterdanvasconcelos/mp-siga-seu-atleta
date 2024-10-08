'use server';

import db from '@/prisma/db';
import { Athlete } from '@prisma/client';
import { ATHLETES_PER_PAGE } from './constants';

export type AthleteWithSport = Athlete & {
  sport: { name: string };
};

type findAthletesProps = {
  offset?: number;
  searchText?: string;
};

export async function findAthletes({
  offset = 0,
  searchText = '',
}: findAthletesProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  return db.athlete.findMany({
    skip: offset,
    take: ATHLETES_PER_PAGE,
    include: { sport: { select: { name: true } } },
    where: { AND: [{ OR: [{ instagramName: { contains: searchText } }] }] },
  });
}

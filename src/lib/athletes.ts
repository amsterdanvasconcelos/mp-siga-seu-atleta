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
  category?: 'olympic' | 'paralympic';
  sport?: string;
};

export async function findAthletes({
  offset = 0,
  searchText = '',
  category,
  sport,
}: findAthletesProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const isParalympic = category && category === 'paralympic';

  return db.athlete.findMany({
    skip: offset,
    take: ATHLETES_PER_PAGE,
    include: { sport: { select: { name: true } } },
    where: {
      AND: [
        { instagramName: { contains: searchText } },
        { paralympic: isParalympic },
        { sport: { code: sport } },
      ],
    },
  });
}

'use client';

import AthleteCard from '@/app/components/athlete-card';
import { AthleteWithSport } from '@/lib/athletes';

type AthletesListClientPros = {
  initialData: AthleteWithSport[];
};

function AthletesListClient({ initialData }: AthletesListClientPros) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {initialData.map((athlete) => (
        <AthleteCard key={athlete.id} athlete={athlete} />
      ))}
    </div>
  );
}

export default AthletesListClient;

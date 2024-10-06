'use client';

import { Athlete } from '@prisma/client';

type AthletesListClientPros = {
  initialData: Athlete[];
};

function AthletesListClient({ initialData }: AthletesListClientPros) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {initialData.map(({ id, name }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
}

export default AthletesListClient;

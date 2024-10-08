'use client';

import { AthleteWithSport, findAthletes } from '@/lib/athletes';
import { ATHLETES_PER_PAGE } from '@/lib/constants';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import AthleteCard from '@/app/components/athlete-card';

type AthletesListClientPros = {
  initialData: AthleteWithSport[];
};

function AthletesListClient({ initialData }: AthletesListClientPros) {
  const [offset, setOffset] = useState(ATHLETES_PER_PAGE);
  const [athletes, setAthletes] = useState<AthleteWithSport[]>(initialData);
  const [hasMoreAthletes, setHasMoreAthletes] = useState(
    initialData.length === ATHLETES_PER_PAGE
  );

  const [scrollTrigger, isInView] = useInView();

  const loadMoreAthletes = async () => {
    if (hasMoreAthletes) {
      const moreAthletes = await findAthletes({ offset });

      if (moreAthletes.length < ATHLETES_PER_PAGE) {
        setHasMoreAthletes(false);
      }

      setAthletes((prevAthletes) => [...prevAthletes, ...moreAthletes]);
      setOffset((prevOffset) => prevOffset + ATHLETES_PER_PAGE);
    }
  };

  useEffect(() => {
    if (isInView && hasMoreAthletes) {
      loadMoreAthletes();
    }
  }, [isInView, hasMoreAthletes]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {athletes.map((athlete) => (
          <AthleteCard key={athlete.id} athlete={athlete} />
        ))}
      </div>
      {hasMoreAthletes && (
        <div className="w-full flex justify-center py-4" ref={scrollTrigger}>
          Carregando...
        </div>
      )}
    </>
  );
}

export default AthletesListClient;

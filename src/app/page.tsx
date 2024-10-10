import { Suspense } from 'react';

import AthletesListSkeleton from '@/app/_components/athlete-list-skeleton';
import AthletesList from '@/app/_components/athletes-list';
import Filters from '@/app/_components/filters';
import { findSports } from '@/lib/sports';

type HomeParams = {
  searchParams: {
    pesquisa?: string;
    categoria?: 'olimpico' | 'paralimpico' | undefined;
    esporte?: string;
  };
};

async function Home({ searchParams }: HomeParams) {
  const searchText = searchParams?.pesquisa || '';
  const category = searchParams?.categoria;
  const sport = searchParams?.esporte;

  const sports = await findSports();

  return (
    <main className="p-4 flex flex-col gap-12">
      <Filters sports={sports} />
      <Suspense
        key={searchText + category + sport}
        fallback={<AthletesListSkeleton />}
      >
        <AthletesList filters={{ searchText, category, sport }} />
      </Suspense>
    </main>
  );
}

export default Home;

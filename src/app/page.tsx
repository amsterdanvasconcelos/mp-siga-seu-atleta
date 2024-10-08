import { Suspense } from 'react';

import AthletesListSkeleton from './components/athlete-list-skeleton';
import AthletesList from './components/athletes-list';
import Filters from '@/app/components/filters';

async function Home({ searchParams }: { searchParams: { q?: string } }) {
  const searchText = searchParams?.q || '';

  return (
    <main className="p-4 flex flex-col gap-12">
      <Filters />
      <Suspense key={searchText} fallback={<AthletesListSkeleton />}>
        <AthletesList searchText={searchText} />
      </Suspense>
    </main>
  );
}

export default Home;

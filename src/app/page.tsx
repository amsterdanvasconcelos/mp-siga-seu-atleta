import { Suspense } from 'react';

import AthletesListSkeleton from './components/athlete-list-skeleton';
import AthletesList from './components/athletes-list';

async function Home() {
  return (
    <main>
      <Suspense fallback={<AthletesListSkeleton />}>
        <AthletesList />
      </Suspense>
    </main>
  );
}

export default Home;

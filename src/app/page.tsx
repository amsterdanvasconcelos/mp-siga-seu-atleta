import AthletesList from './components/athletes-list';
import { Suspense } from 'react';

async function Home() {
  return (
    <main>
      <Suspense fallback={<h2>Carregando...</h2>}>
        <AthletesList />
      </Suspense>
    </main>
  );
}

export default Home;

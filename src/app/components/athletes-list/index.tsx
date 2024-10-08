import { findAthletes } from '@/lib/athletes';
import AthletesListClient from './athletes-list-client';

async function AthletesListServer({ searchText }: { searchText: string }) {
  const athletes = await findAthletes({ searchText });

  return <AthletesListClient initialData={athletes} filters={{ searchText }} />;
}

export default AthletesListServer;

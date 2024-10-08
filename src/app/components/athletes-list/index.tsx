import { findAthletes } from '@/lib/athletes';
import AthletesListClient from './athletes-list-client';

async function AthletesListServer() {
  const athletes = await findAthletes({});

  return <AthletesListClient initialData={athletes} />;
}

export default AthletesListServer;

import { findAthletes } from '@/lib/athletes';
import AthletesListClient from './athletes-list-client';

type AthletesListProps = {
  filters: {
    searchText: string;
    category: 'olimpico' | 'paralimpico' | undefined;
    sport: string;
  };
};

async function AthletesListServer({ filters }: AthletesListProps) {
  const athletes = await findAthletes({ ...filters });

  if (!athletes.length)
    return (
      <h2 className="text-xl">
        Não existem atletas para os filtros selecionados
      </h2>
    );

  return <AthletesListClient initialData={athletes} filters={{ ...filters }} />;
}

export default AthletesListServer;

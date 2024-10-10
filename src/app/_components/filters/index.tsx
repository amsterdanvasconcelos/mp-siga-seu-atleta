'use client';

import { SearchInput } from '@/components/ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';
import DesktopFilters from './_components/desktop';
import { Sport } from '@prisma/client';

function Filters({ sports }: { sports: Sport[] }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const q = searchParams.get('pesquisa') || '';
  const category = searchParams.get('categoria') || undefined;
  const sport = searchParams.get('esporte') || '';

  const handleChange = useDebouncedCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const params = new URLSearchParams(searchParams);
      const searchString = event.target.value;

      if (searchString) {
        params.set('pesquisa', searchString);
      } else {
        params.delete('pesquisa');
      }

      replace(`${pathname}?${params.toString()}`);
    },
    200
  );

  const handleCategoryChange = (selectedCategory: string) => {
    if (!selectedCategory) return;

    const params = new URLSearchParams(searchParams);

    if (selectedCategory === 'todos') {
      params.delete('categoria');
    } else {
      params.set('categoria', selectedCategory);
    }

    replace(`${pathname}?${params.toString()}`);
  };

  const handleSportChange = (code: string) => {
    const params = new URLSearchParams(searchParams);
    const currentSport = params.get('esporte');
    if (currentSport === code) return;

    if (code) {
      params.set('esporte', code);
    } else {
      params.delete('esporte');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="relative flex flex-row md:flex-col lg:flex-row gap-8">
      <div>
        <SearchInput
          className="w-56 md:w-full lg:w-56 text-lg"
          type="text"
          name="q"
          placeholder="Pesquisar"
          defaultValue={q}
          onChange={handleChange}
        />
      </div>
      <DesktopFilters
        category={category}
        onCategoryChange={handleCategoryChange}
        sports={sports}
        sportCode={sport}
        onSportChange={handleSportChange}
      />
    </div>
  );
}

export default Filters;

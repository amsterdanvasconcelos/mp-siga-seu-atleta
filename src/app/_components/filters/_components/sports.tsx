import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Sport } from '@prisma/client';
import Image from 'next/image';
import { useState } from 'react';

function SportsFilter({
  sports,
  sportCode,
  onSportChange,
}: {
  sports: Sport[];
  sportCode: string;
  onSportChange: (code: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState<Sport | null>(
    sports.find(({ code }) => code === sportCode) || null
  );

  const handleChange = (name: string) => {
    if (name === 'todos os esportes') {
      setSelectedSport(null);
      setOpen(false);
      onSportChange('');
      return;
    }

    const selected = sports.find((sport) => sport.name === name);

    setSelectedSport(selected || null);
    setOpen(false);
    onSportChange(selected?.code || '');
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-1">
      <span className="text-sm underline decoration-yellow-500 block md:hidden">
        Esporte:
      </span>
      <div className="flex items-center space-x-4 h-full">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button variant={'outline'}>
              {selectedSport ? (
                <>
                  <SportIcon code={selectedSport.code} /> {selectedSport.name}
                </>
              ) : (
                <>Todos os esportes</>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0" side="top" align="center">
            <Command>
              <CommandInput placeholder="Pesquisar esporte..." />
              <CommandList>
                <CommandEmpty>Esporte não encontrado.</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    value={'todos os esportes'}
                    onSelect={handleChange}
                  >
                    todos os esportes
                  </CommandItem>
                  {sports.map(({ code, name }) => (
                    <CommandItem
                      key={code}
                      value={name}
                      onSelect={handleChange}
                    >
                      <SportIcon code={code} />
                      <span>{name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

function SportIcon({ code }: { code: string }) {
  return (
    <Image
      className="mr-2"
      src={`https://codante.s3.amazonaws.com/codante-apis/olympic-games/pictograms/${code}.avif`}
      alt="Baideira do esporte"
      width={20}
      height={20}
    />
  );
}

export default SportsFilter;

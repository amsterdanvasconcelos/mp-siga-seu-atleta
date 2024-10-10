import { Sport } from '@prisma/client';
import CategoriesFilter from './categories';
import SportsFilter from './sports';

type DesktopFiltersProps = {
  category: string;
  onCategoryChange: (selectedCategory: string) => void;
  sports: Sport[];
  sportCode: string;
  onSportChange: (code: string) => void;
};

function DesktopFilters({
  category,
  onCategoryChange,
  sports,
  sportCode,
  onSportChange,
}: DesktopFiltersProps) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-8">
        <CategoriesFilter
          category={category}
          onCategoryChange={onCategoryChange}
        />
        <SportsFilter
          sports={sports}
          sportCode={sportCode}
          onSportChange={onSportChange}
        />
      </div>
    </div>
  );
}

export default DesktopFilters;

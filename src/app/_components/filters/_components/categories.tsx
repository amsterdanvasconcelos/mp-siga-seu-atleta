import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

type CategoriesFilterProps = {
  category: string | undefined;
  onCategoryChange: (selectedCategory: string) => void;
};

function CategoriesFilter({
  category,
  onCategoryChange,
}: CategoriesFilterProps) {
  const categoryValue = category ? category : 'todos';

  return (
    <div className="flex flex-col md:flex-row items-center gap-1 mt-10 md:mt-0">
      <span className="text-sm underline decoration-yellow-500 block md:hidden">
        Categoria:
      </span>
      <ToggleGroup
        type="single"
        value={categoryValue}
        onValueChange={onCategoryChange}
      >
        <ToggleGroupItem value="todos" aria-label="Selecionar todos">
          Todos
        </ToggleGroupItem>
        <ToggleGroupItem value="olimpico" aria-label="Selecionar olímpicos">
          Olímpicos
        </ToggleGroupItem>
        <ToggleGroupItem
          value="paralimpico"
          aria-label="Selecionar paralímpicos"
        >
          Paralímpicos
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}

export default CategoriesFilter;

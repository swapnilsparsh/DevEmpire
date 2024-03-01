import { Filter, Layout } from "@/interfaces/obj_type";

interface FiltersProps {
  filters: Layout[];
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Filters({
  filters,
  isMenuOpen,
  setIsMenuOpen,
}: FiltersProps) {
  const filters_names: Filter[] = [];
  filters.forEach((development: Layout) => {
    filters_names.push({ id: development.id, name: development.subheading });
  });

  const rendered_filters = filters_names.map((filter: Filter) => (
    <a key={filter.id} className="filter-buttons" href={`#${filter.id}`}>
      {filter.name}
    </a>
  ));

  const topValue = isMenuOpen ? "128px" : "70px";
  const style = {
    top: `${topValue}`,
  };

  return (
    <div className="filters" style={style}>
      {rendered_filters}
    </div>
  );
}

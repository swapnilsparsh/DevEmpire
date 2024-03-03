import { Filter, Layout } from "@/interfaces/obj_type";

interface FiltersProps {
  filters: Layout[];
  isMenuOpen: boolean;
}

export default function Filters({ filters, isMenuOpen }: FiltersProps) {
  const filters_names: Filter[] = [];
  filters.forEach((development: Layout) => {
    filters_names.push({ id: development.id, name: development.subheading });
  });

  const rendered_filters = filters_names.map((filter: Filter) => (
    <div className="filters-div" key={filter.id}>
      <a className="filter-buttons" href={`#${filter.id}`}>
        {filter.name}
      </a>
    </div>
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

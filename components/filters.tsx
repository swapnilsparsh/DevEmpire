import { Filter, Layout } from "@/interfaces/obj_type";

export default function Filters({ filters }: { filters: Layout[] }) {
  const filters_names: Filter[] = [];
  filters.forEach((development: Layout) => {
    filters_names.push({id: development.id, name: development.subheading});
  });

  const rendered_filters = filters_names.map((filter: Filter) => (    
    <a
      key={filter.id}
      className="filter-buttons"
      href={`#${filter.id}`}
    >
      {filter.name}
    </a>
  ));

  return <div className="filters">{rendered_filters}</div>;
}

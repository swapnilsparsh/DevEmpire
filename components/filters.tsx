export default function Filters({ filter_names }: { filter_names: string[] }) {
  const rendered_filters = filter_names.map((filter: string) => (
    <a key={filter}
      className="filter-buttons"
      href={`#${filter.charAt(0).toLowerCase()}${filter
        .substring(1)
        .toLowerCase()}`}
    >
      {filter}
    </a>
  ));

  return <div className="filters">{rendered_filters}</div>;
}

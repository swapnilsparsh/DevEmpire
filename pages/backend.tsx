import backend_data from "@/data/dataSource/backend";
import Structure from "@/components/structure";

export default function Backend() {
  return (
    <div className="layout">
      <Structure
        heading="Backend, API, Tools..."
        description="Looking for a backend, api, tools for your next project? We've got you
          covered with a list of the best ones out there!"
        layout={backend_data}
      />
    </div>
  );
}

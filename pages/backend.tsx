import backend_data from "@/data/dataSource/backend";
import Structure from "@/components/structure";

export default function Backend() {
  return (
    <div className="layout">
      <Structure
        heading="Backend"
        description="Looking for a backend, tools for your next project? We've got you
          covered with a list of the best ones out there!"
        layout={backend_data}
      />
    </div>
  );
}

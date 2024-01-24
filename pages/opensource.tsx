import Filters from "@/components/filters";
import Structure from "@/components/structure";
import opensource_data from "@/data/dataSource/opensource";

export default function OpenSource() {
  return (
    <div className="layout">
      <Filters filters={opensource_data} />

      <Structure
        heading="Open Source Programs"
        description="Looking for an open-source program to apply to? You're just a click away. Find all the details right here!"
        layout={opensource_data}
      />
    </div>
  );
}

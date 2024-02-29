import Structure from "@/components/structure";
import programs_data from "@/data/dataSource/programs";

export default function OpenSource() {
  return (
    <div className="layout">
      <Structure
        heading="Programs"
        description="Looking for program to apply to? You're just a click away. Find all the details right here!"
        layout={programs_data}
      />
    </div>
  );
}

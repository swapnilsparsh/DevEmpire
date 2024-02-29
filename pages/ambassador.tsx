import Structure from "@/components/structure";
import ambassador_data from "@/data/dataSource/ambassador";

export default function AmbassadorPage() {
  return (
    <div className="layout">
      <Structure
        heading="Ambassador"
        description=" Find the perfect program for you from 75+ ambassador and fellowship
          programs from all over the world."
        layout={ambassador_data}
      />
    </div>
  );
}

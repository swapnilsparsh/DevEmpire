import Filters from "@/components/filters";
import development_data from "@/data/dataSource/development";
import Structure from "@/components/structure";

export default function Development() {
  return (
    <div className="layout">
      <Filters filters={development_data} />

      <Structure
        heading="Web Development"
        description="Power up your website with awesome tools from CSS generators to icons,
          illustrations, vectors and so much more."
        layout={development_data}
      />
    </div>
  );
}

import webDev_data from "@/data/dataSource/webdev";
import Structure from "@/components/structure";

export default function Development() {
  return (
    <div className="layout">
      <Structure
        heading="Web Dev Tools"
        description="Power up your website with awesome tools from CSS generators to icons,
          illustrations, vectors and so much more."
        layout={webDev_data}
      />
    </div>
  );
}

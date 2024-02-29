import { Layout } from "@/interfaces/obj_type";
import SectionSlot from "./section-slot";
import Filters from "./filters";
import programs_data from "@/data/dataSource/programs";

export default function Structure({
  heading,
  description,
  layout,
}: {
  heading: string;
  description: string;
  layout: Layout[];
}) {
  const renderedItems = layout.map((item: Layout, index: number) => (
    <div key={item.id}>
      <section id={`${item.id}`}>
        <SectionSlot
          subheading={`${item.subheading}`}
          dataSource={item.dataSource}
        />
      </section>
      {index < layout.length - 1 && <div className="divider"></div>}
    </div>
  ));

  return (
    <>
      <div>
        <div className="de-padding">
          <h1 className="de-heading">{heading}</h1>
          <p className="de-description">{description}</p>
        </div>
        <Filters filters={layout} />

        <div className="flex-alignment">{renderedItems}</div>
      </div>
    </>
  );
}

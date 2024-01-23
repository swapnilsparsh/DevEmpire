import { Layout, Data } from "@/interfaces/obj_type";
import Card from "./card";
import SectionSlot from "./section-slot";

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
      <section id={`${item.id}`} >
        <SectionSlot
          subheading={`${item.subheading}`}
          dataSource={item.dataSource}
        />
      </section>
      <div className="divider"></div>
    </div>
  ));

  return (
    <>
      <div>
        <div className="de-padding">
          <h1 className="de-heading">{heading}</h1>
          <p className="de-description">{description}</p>
        </div>
        <div className="flex-alignment">{renderedItems}</div>
      </div>
    </>
  );
}

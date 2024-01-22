import Card from "../components/card";
import WebDevDatas from "@/data/development";
import { Data } from "@/data/obj_type";

export default function Development() {

    const renderedItems = WebDevDatas.map(
        (item: Data) => (
            <Card
              key={item.link}
              img={item.image}
              name={item.head}
              description={item.about}
              url={item.link}
            />
        )
      );

  return (
    <div className="layout">
      <div className="ambassador-padding">
        <h1 className="ambassador-heading">Web Development</h1>
        <p className="ambassador-description">
          Power up your website with awesome tools from CSS generators to icons,
          illustrations, vectors and so much more.
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

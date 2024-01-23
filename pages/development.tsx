import Card from "../components/card";
import WebDevDatas from "@/data/dataSource/development";
import { Data } from "@/interfaces/obj_type";

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
      <div className="de-padding">
        <h1 className="de-heading">Web Development</h1>
        <p className="de-description">
          Power up your website with awesome tools from CSS generators to icons,
          illustrations, vectors and so much more.
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

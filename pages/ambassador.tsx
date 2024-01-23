
import Card from "../components/card";
import React from "react";
import AmbassadorDatas from "@/data/dataSource/ambassador";
import { Data } from "@/interfaces/obj_type";

export default function AmbassadorPage() {
  const renderedItems = AmbassadorDatas.map(
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
        <h1 className="de-heading">Ambassador</h1>
        <p className="de-description">
          Find the perfect program for you from 75+ ambassador and fellowship
          programs from all over the world.
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

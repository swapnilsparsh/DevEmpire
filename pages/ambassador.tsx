
import Card from "../components/card";
import React from "react";
import AmbassadorDatas from "@/data/ambassador";
import { Data } from "@/data/obj_type";

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
      <div className="ambassador-padding">
        <h1 className="ambassador-heading">Ambassador</h1>
        <p className="ambassador-description">
          Find the perfect program for you from 75+ ambassador and fellowship
          programs from all over the world.
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

import Card from "../components/card";
import GamesData from "@/data/dataSource/games";
import React from "react";
import { Data } from "@/interfaces/obj_type";

export default function Games() {
  const renderedItems = GamesData.map((item: Data) => (
    <Card
      key={item.link}
      img={item.image}
      name={item.head}
      description={item.about}
      url={item.link}
    />
  ));
  return (
    <div className="layout">
      <div className="de-padding">
        <h1 className="de-heading">Games</h1>
        <p className="de-description">
          Ever heard of 'All work and no play makes the developer dull'? Here's
          your chance to mix some play into your work!
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

import { Inter } from "next/font/google";
import Card from "../components/card";
import GamesData from "@/data/games";
import React from "react";
import { Data } from "@/data/obj_type";

const inter = Inter({ subsets: ["latin"], weight: "600" });

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
    <div className={`${inter.className} layout`}>
      <div className="ambassador-padding">
        <h1 className="ambassador-heading">Games</h1>
        <p className="ambassador-description">
          Ever heard of 'All work and no play makes the developer dull'? Here's
          your chance to mix some play into your work!
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

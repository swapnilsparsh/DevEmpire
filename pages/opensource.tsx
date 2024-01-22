import Card from "../components/card";
import React from "react";
import OpenSourceData from "@/data/opensource";
import { Data } from "@/data/obj_type";


export default function OpenSource(){
    const renderedItems = OpenSourceData.map(
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
            <h1 className="ambassador-heading">Open Source Programs</h1>
            <p className="ambassador-description">
            Looking for an open-source program to apply to? You're just a click away. Find all the details right here!
            </p>
          </div>
          <div className="flex-alignment">{renderedItems}</div>
        </div>
      );
}
import Card from "../components/card";
import React from "react";
import OpenSourceData from "@/data/dataSource/opensource";
import { Data } from "@/interfaces/obj_type";


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
          <div className="de-padding">
            <h1 className="de-heading">Open Source Programs</h1>
            <p className="de-description">
            Looking for an open-source program to apply to? You're just a click away. Find all the details right here!
            </p>
          </div>
          <div className="flex-alignment">{renderedItems}</div>
        </div>
      );
}
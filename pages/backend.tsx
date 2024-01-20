import { Inter } from "next/font/google";
import Card from "../components/card";
import { Data } from "@/data/obj_type";
import BackendData from "@/data/backend";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function Backend() {
  const renderedItems = BackendData.map((item: Data) => (
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
        <h1 className="ambassador-heading">Backend, API, Tools...</h1>
        <p className="ambassador-description">
          Looking for a backend, api, tools for your next project? We've got you
          covered with a list of the best ones out there!
        </p>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

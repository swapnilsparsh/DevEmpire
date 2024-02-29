import { Inter } from "next/font/google";
import Card from "../components/card";
import { Data } from "@/interfaces/obj_type";

const inter = Inter({ subsets: ["latin"], weight: "600" });

export default function SectionSlot({ subheading, dataSource }: { subheading: string, dataSource: Data[] }) {
  const renderedItems = dataSource.map((item: Data, index: number) => (
    <Card
      key={index}
      img={item.image}
      name={item.head}
      description={item.about}
      url={item.link}
    />
  ));

  return (
    <div className={`${inter.className}`}>
      <div className="subheading-padding">
        <h1 className="subheading">{subheading}</h1>
      </div>
      <div className="flex-alignment">{renderedItems}</div>
    </div>
  );
}

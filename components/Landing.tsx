import { navbarData } from "@/data/navbar";
import backend_data from "@/data/dataSource/backend";
import all_data_sources from "@/data/dataSource/export";
import { Layout } from "@/interfaces/obj_type";
import LandingCard from "./landingCards";

export default function Landing() {
  let images = [];
  let randomImages: string[][] = [];

  // Function to get random elements from an array
  const getRandomElements = (array: string[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  all_data_sources.map(
    (data_source: Layout[]) => (
      (images = []),
      (images = [
        ...new Set(
          data_source.flatMap((obj) => obj.dataSource.map((data) => data.image))
        ),
      ]),
      randomImages.push(getRandomElements(images, 4))
    )
  );


  console.log(randomImages);

  return(
    <LandingCard randomImages={randomImages}/>
  );
}

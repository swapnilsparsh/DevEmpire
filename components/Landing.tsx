import all_data_sources from "@/data/dataSource/export";
import { Layout } from "@/interfaces/obj_type";
import Home from "../public/svg/Home.svg";
import LandingCard from "./landingCards";
import Image from "next/image";

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

  return (
    <>
      <div className="landing-page">
        <div className="landing-main">
          <div>
            <h1>Developer Empire</h1>
            <p>
              It's time to close those extra tabs. Welcome to your one-stop
              solution for all resources and details on ambassador/fellowship
              programs, open source programs, web dev tools and so much more!
            </p>
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <a href="#info">Explore All</a>
            </button>
          </div>
          <div>
            <Image id="home" src={Home} alt={"home-img"} priority />
          </div>
        </div>
      </div>
      <div id="info">
        <LandingCard randomImages={randomImages} />
      </div>
    </>
  );
}

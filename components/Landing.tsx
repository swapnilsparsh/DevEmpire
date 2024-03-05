import all_data_sources from "@/data/dataSource/export";
import { Layout } from "@/interfaces/obj_type";
import Home from "../public/svg/Home.svg";
import LandingCard from "./landingCards";
import Image from "next/image";
import { sendGAEvent } from "@next/third-parties/google";

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
          <div className="landing-alignment">
            <div>
              <h2>Developer Empire</h2>
            </div>
            <div>
              <p>
                It is time to close those extra tabs. Welcome to your one-stop
                solution for all resources and details on ambassador/fellowship
                programs, open source programs, web dev tools and so much more!
              </p>
            </div>
            <div>
              <a href="#info">
                <button
                  className="explore-all-btn"
                  type="button"
                  onClick={() =>
                    sendGAEvent({
                      event: "buttonClicked",
                      value: "Explore All",
                    })
                  }
                >
                  Explore All
                </button>
              </a>
            </div>
          </div>
          <div className="landing-img">
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

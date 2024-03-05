import { navbarData } from "@/data/navbar";
import { sendGAEvent } from "@next/third-parties/google";

export default function LandingCard({
  randomImages,
}: {
  randomImages: string[][];
}) {
  return (
    <div className="landing-page">
      <div className="landing-cards">
        {navbarData.map((item, key) => (
          <a
            key={key}
            href={`/${item.name.toLowerCase()}`}
            target="_blank"
            onClick={() =>
              sendGAEvent({ event: "fromLanding", value: item.name })
            }
            title="Click to view more"
          >
            <div className="card-layout" key={key}>
              <div className="card-mr">
                <div
                  className="landing-cards-img"
                  style={{ marginTop: "-2rem" }}
                >
                  {randomImages[key].map((img: string) => (
                    <img key={img} src={img} alt={`${item}`} />
                  ))}
                </div>
                <div>
                  <h2 className="card-heading text-center">{item.name}</h2>
                </div>
                <br />
                <p className="card-description text-center">
                  {item.description}
                </p>
                <br />
                <div className="text-center">
                  <div className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                    View More
                  </div>
                </div>
              </div>
              <br />
              <div className="glow-border"></div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

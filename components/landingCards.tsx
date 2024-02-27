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
          <div className="card-layout" key={key}>
            <div className="card-mr">
              <div className="landing-cards-img">
                {randomImages[key].map((img: string) => (
                  <img key={img} src={img} alt={`${item}`} />
                ))}
              </div>
              <div>
                <h2 className="card-heading text-center">{item.name}</h2>
              </div>
              <br />
              <p className="card-description text-center">{item.description}</p>
              <br />
              <div className="text-center">
                <a
                  href={`/${item.name.toLowerCase()}`}
                  target="_blank"
                  className="view-more"
                  onClick={() =>
                    sendGAEvent({ event: "fromLanding", value: item.name })
                  }
                >
                  View More
                </a>
              </div>
              <br />
            </div>
            <br />
            <div className="glow-border"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

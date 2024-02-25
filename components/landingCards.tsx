import { navbarData } from "@/data/navbar";

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
                  <img key={img} src={img} alt={`${item.img}`} />
                ))}
              </div>
              <div>
                <h2 className="card-heading">{item.name}</h2>
              </div>
              <br />
              <p className="card-description">{item.description}</p>
              <br />
              <a href={item.url} target="_blank" className="view-more">
                View More
              </a>
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

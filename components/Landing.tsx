import { navbarData } from "@/data/navbar";
import Card from "./card";
import backend_data from "@/data/dataSource/backend";

export default function Landing() {
  // Flatten the array of objects and extract all images
  const allImages = [
    ...new Set(
      backend_data.flatMap((obj) => obj.dataSource.map((data) => data.image))
    ),
  ];

  // Function to get random elements from an array
  const getRandomElements = (array: string[], count: number) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  // Get 4 random images from allImages array
  const randomImages = getRandomElements(allImages, 4);

  console.log(randomImages);

  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {navbarData.map((item, key) => (
          <div className="card-layout" key={key}>
            <div className="card-mr">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginBottom: "2rem"
                }}
              >
                {randomImages.map((img: string) => (
                  <img src={img} alt={`${item.img}`} style={{width: "40%", border: ".1px solid #adadad", borderRadius: "0.2rem"}}/>
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

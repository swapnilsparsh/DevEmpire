import Image, { StaticImageData } from "next/image";

export default function Card({
  img,
  name,
  description,
  url,
}: {
  img: StaticImageData;
  name: string;
  description: string;
  url: string;
}) {
  return (
    <div className="card-layout">
      <div className="card-mr">
        <Image src={img} alt={`${img}.png`} className="card-img" />
        <div>
          <h2 className="card-heading">{name}</h2>
        </div>
        <br />
        <p className="card-description">{description}</p>
        <br />
        <a href={url} target="_blank">
          {" "}
          <button className="btn btn-outline">View More</button>{" "}
        </a>
        <br />
      </div>
      <br />
      <div className="glow-border"></div>
    </div>
  );
}

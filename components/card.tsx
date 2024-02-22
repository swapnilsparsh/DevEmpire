import Image, { StaticImageData } from "next/image";

export default function Card({
  img,
  name,
  description,
  url,
}: {
  img: string;
  name: string;
  description: string;
  url: string;
}) {
  return (
    <div className="card-layout">
      <div className="card-mr">
        <img src={img} alt={`${img}`} className="card-img" />
        <div>
          <h2 className="card-heading">{name}</h2>
        </div>
        <br />
        <p className="card-description">{description}</p>
        <br />
        <a href={url} target="_blank" className="view-more">
          View More
        </a>
        <br />
      </div>
      <br />
      <div className="glow-border"></div>
    </div>
  );
}

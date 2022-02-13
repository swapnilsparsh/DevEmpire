import React from "react";

function Card({ head, link, image, alt, about }) {
  return (
    <div className="frame-border" key={`${head}_${link}`}>
      <div className="pointer"></div>
      <div className="card-js">
        <div className="content">
          <a href={link} target="_blank" rel="noreferrer">
            <h3>{head}</h3>
            <img src={image} alt={alt}></img>
          </a>
          <p>{about}</p>
          <a className="card__link" href={link} target="_blank" rel="noreferrer">View More</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

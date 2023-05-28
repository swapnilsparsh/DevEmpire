import React from "react";

const createMarkup = html => {
  return {
    __html: html
  }
}

function Card({ head, link, image, alt, about }) {
  return (
    <div className="frame-border" key={`${head}_${link}`}>
      <div className="pointer"></div>
      <div className="card-js">
        <div className="content">
          <h3 dangerouslySetInnerHTML={createMarkup(head)}></h3>
          <img src={image} alt={alt} />
          <p dangerouslySetInnerHTML={createMarkup(about)}></p>
          <a
            className="card__link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;

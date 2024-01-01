import React from "react";
import Link from "next/link";

const createMarkup = (html) => {
  return {
    __html: html,
  };
};

function Card({ head, link, image, alt, about }) {
  return (
    <div className="frame-border" key={`${head}_${link}`}>
      <div className="pointer"></div>
      <div className="card-js app">
        <div className="content">
          <h3 dangerouslySetInnerHTML={createMarkup(head)}></h3>
          <img
            src={image}
            alt={alt}
            loading="lazy"
            decoding="async"
            width="300" // Adjust the width according to your design
          />
          <p dangerouslySetInnerHTML={createMarkup(about)}></p>
          <button className="glow-button">
            <Link href={link} passHref>
              <a className="glowing-button" target="_blank" rel="noreferrer">
                View More
              </a>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

const createMarkup = (html) => {
  return {
    __html: html,
  };
};

function Card({ head, link, image, alt, about }) {
  return (
    <>
      <div className="frame-border bg" key={`${head}_${link}`}>
        <div className="pointer"></div>
        <div className="card-js app">
          <div className="content">
            <img
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              width="300" // Adjust the width according to your design
            />
            <h3 dangerouslySetInnerHTML={createMarkup(head)}></h3>
            <p dangerouslySetInnerHTML={createMarkup(about)} style={{ width: '75%', margin: '1rem auto' }}></p>
            <Button variant="outlined">
              <Link href={link} passHref key={`${head}_${link}`}>
                <a className="glowing-button" target="_blank" rel="noreferrer">
                  View More
                </a>
              </Link></Button>
          </div>
        </div>
        <div className="glow-border"></div>
      </div>
    </>
  );
}

export default Card;

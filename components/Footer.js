import React from "react";
import dynamic from "next/dynamic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faProductHunt, faTwitter } from '@fortawesome/free-brands-svg-icons';

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div className="footer" role="footer" >

        <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', margin: 'auto 5rem', padding: '1rem 0rem' }} >
          <p style={{ color: "white" }} aria-label="Copyright by DevEmpire">Copyright © DevEmpire {year}.</p>
          <p>
            Made by{" "}
            <a
              href="https://swapnilsparsh.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Swapnil Srivastava on Github"
              // title="Github (External Link)"
              style={{ color: 'white' }}>
              {" "}
              Swapnil
            </a>{" "}

            &

            <a
              href="https://jatiinyadav.github.io"
              target="_blank"
              rel="noreferrer"
              aria-label="Follow Jatin Yadav on Github"
              // title="Github (External Link)"
              style={{ color: 'white' }}>
              {" "}
              Jatin
            </a>
          </p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', gap: '1rem', cursor: 'pointer', color: 'white' }}>
            <p style={{ marginTop: '.1rem' }}>SUPPORT</p>
            <p style={{ marginTop: '.1rem' }}>|</p> 
            <a href="https://github.com/swapnilsparsh/DevEmpire" target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" inverse /></a>
            <a href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire" target="_blank"><FontAwesomeIcon icon={faProductHunt} size="xl" inverse /></a>
            <a href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh" target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" inverse /></a>
          </div>
        </div>

      </div>
    </>
  );
};

export default Footer;

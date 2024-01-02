import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faProductHunt, faTwitter } from '@fortawesome/free-brands-svg-icons';

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
          <div>SUPPORT</div>
        </div>

      </div>
    </>
  );
};

export default Footer;

import React from "react";

import {
  Column1,
  Column2,
  FooterLink,
  Heading1,
  Heading2
} from "./FooterStyles";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faProductHunt, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faEnvelope, faGamepad, faGlobe, faMedal } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div className="footer" role="footer" >
        <footer className="copyright">
          <div className="footer-question">
            <h2 style={{color:"var(--navbar-links)"}}>
              <span>👑</span>DevEmpire
            </h2>
            <br />
            <h4>
              Made by{" "}
              <a
                href="https://swapnilsparsh.github.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Swapnil Srivastava on Github"
                title="Github (External Link)"
              >
                {" "}
                Swapnil Srivastava
              </a>{" "}
            </h4>
            <br />
            <h4>
              Maintain by
              <a
                href="https://jatiinyadav.github.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Jatin Yadav on Github"
                title="Github (External Link)"
              >
                {" "}
                Jatin Yadav
              </a>
            </h4>
          </div>
        </footer>
        <div className="footer-details">
          <div className="column1">
            <Column1>
              <Heading1 style={{color:"var(--navbar-links)"}}>Support</Heading1>
              <FooterLink style={{color:"var(--navbar-links)"}} target="_blank" href="https://github.com/swapnilsparsh/DevEmpire" aria-label="Visit us on Github" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
              <span>GitHub</span>
              </FooterLink>
              <FooterLink style={{color:"var(--navbar-links)"}} target="blank" href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire" aria-label="Our product on Product Hunt" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faProductHunt} />
              <span>Product Hunt</span>
              </FooterLink>
              <FooterLink style={{color:"var(--navbar-links)"}} target="blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh" aria-label="Visit us on Twitter" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
              <span>Twitter</span>
              </FooterLink>
              <FooterLink style={{color:"var(--navbar-links)"}} href="#" aria-label="Our Newsletter" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Newsletter</span>
              </FooterLink>
            </Column1>
          </div>
          <div className="column2">
            <Column2>
              <Heading2 className="explore" style={{color:"var(--navbar-links)"}}>Explore</Heading2>
              <Link href="/ambassador">
                <FooterLink style={{color:"var(--navbar-links)"}} aria-label="Ambassador Page"><FontAwesomeIcon icon={faMedal} />
              <span>Ambassador</span></FooterLink>
              </Link>
              <Link href="/programs">
                <FooterLink style={{color:"var(--navbar-links)"}} aria-label="Programs Page"><FontAwesomeIcon icon={faCalendar} />
              <span>Programs</span></FooterLink>
              </Link>
              <Link href="/webdev">
                <FooterLink style={{color:"var(--navbar-links)"}} aria-label="WebDev Page"><FontAwesomeIcon icon={faGlobe} />
              <span>WebDev</span></FooterLink>
              </Link>
              <Link href="/games">
                <FooterLink style={{color:"var(--navbar-links)"}} aria-label="Games Page"><FontAwesomeIcon icon={faGamepad} />
              <span>Games</span></FooterLink>
              </Link>
            </Column2>
          </div>
        </div>
      </div>
      <p className="footer-copyright" aria-label="Copyright by DevEmpire">Copyright © {year} DevEmpire</p>
    </>
  );
};

export default Footer;

import React from "react";

import {
  Box,
  Container,
  Row,
  Column1,
  Column2,
  FooterLink,
  Heading1,
  Heading2
} from "./FooterStyles";
import dynamic from "next/dynamic";
import Link from "next/link";

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {

  let year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <footer className="copyright">
          <div className="footer-question">
            <h2>
              <span>👑</span>DevEmpire
            </h2>
            <br />
            <h4>
              Made by{" "}
              <a
                href="https://swapnilsparsh.github.io"
                target="_blank"
                rel="noreferrer"
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
              <Heading1>Support</Heading1>
              <FooterLink target="_blank" href="https://github.com/swapnilsparsh/DevEmpire" aria-label="Visit us on Github" rel="noopener noreferrer">
                GitHub
              </FooterLink>
              <FooterLink target="blank" href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire" aria-label="Product Hunt" rel="noopener noreferrer">
                Product Hunt
              </FooterLink>
              <FooterLink target="blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh" aria-label="Visit us on Twitter" rel="noopener noreferrer">
                Twitter
              </FooterLink>
              <FooterLink href="#" aria-label="Newsletter" rel="noopener noreferrer">
                Newsletter
              </FooterLink>
            </Column1>
          </div>
          <div className="column2">
            <Column2>
              <Heading2>Explore</Heading2>
              <Link href="/ambassador">
                <FooterLink aria-label="Ambassador">Ambassador</FooterLink>
              </Link>
              <Link href="/programs">
                <FooterLink aria-label="Programs">Programs</FooterLink>
              </Link>
              <Link href="/webdev">
                <FooterLink aria-label="WebDev">WebDev</FooterLink>
              </Link>
              <Link href="/games">
                <FooterLink aria-label="Games">Games</FooterLink>
              </Link>
            </Column2>
          </div>
        </div>
      </div>
      <p className="footer-copyright">Copyright © {year} DevEmpire</p>
    </>
  );
};

export default Footer;

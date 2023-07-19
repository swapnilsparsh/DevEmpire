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

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});
const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <>
      <div className="footer" role="footer">
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
              <Heading1>Support</Heading1>
              <FooterLink target="_blank" href="https://github.com/swapnilsparsh/DevEmpire" aria-label="Visit us on Github" rel="noopener noreferrer">
                GitHub
              </FooterLink>
              <FooterLink target="blank" href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire" aria-label="Our product on Product Hunt" rel="noopener noreferrer">
                Product Hunt
              </FooterLink>
              <FooterLink target="blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh" aria-label="Visit us on Twitter" rel="noopener noreferrer">
                Twitter
              </FooterLink>
              <FooterLink href="#" aria-label="Our Newsletter" rel="noopener noreferrer">
                Newsletter
              </FooterLink>
            </Column1>
          </div>
          <div className="column2">
            <Column2>
              <Heading2>Explore</Heading2>
              <Link href="/ambassador">
                <FooterLink aria-label="Ambassador Page">Ambassador</FooterLink>
              </Link>
              <Link href="/programs">
                <FooterLink aria-label="Programs Page">Programs</FooterLink>
              </Link>
              <Link href="/webdev">
                <FooterLink aria-label="WebDev Page">WebDev</FooterLink>
              </Link>
              <Link href="/games">
                <FooterLink aria-label="Games Page">Games</FooterLink>
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

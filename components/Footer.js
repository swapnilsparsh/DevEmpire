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
        <p className="footer-copyright">© {year} DevEmpire</p>
      </footer>
      <div className="footer-details">
        <div className="column1">
          <Column1>
            <Heading1>Support</Heading1>
            <FooterLink
              target="_blank"
              href="https://github.com/swapnilsparsh/DevEmpire"
            >
              GitHub
            </FooterLink>
            <FooterLink href="https://www.producthunt.com/products/developer-empire?utm_source=badge-featured&utm_medium=badge#developer-empire">
              Product Hunt
            </FooterLink>
            <FooterLink href="https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20website%20having%20a%20collection%20of%20all%20the%20campus%20ambassador%20and%20fellowship%20programs&url=https://devempire.netlify.app&via=swapnilsparsh">
              Twitter
            </FooterLink>
            <FooterLink href="#">Newsletter</FooterLink>
          </Column1>
        </div>
        <div className="column2">
          <Column2>
            <Heading2>Explore</Heading2>
            <Link href="/ambassador">
            <FooterLink >Ambasaddor</FooterLink>
            </Link>
            <Link href="/programs">
            <FooterLink>Programs</FooterLink>
            </Link>
            <Link href="/webdev">
            <FooterLink >WebDev</FooterLink>
            </Link>
            <Link href="/games">
            <FooterLink >Games</FooterLink>
            </Link>
          </Column2>
        </div>
      </div>
    </div>
  );
};

export default Footer;

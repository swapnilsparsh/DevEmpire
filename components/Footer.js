import React from "react";
import dynamic from "next/dynamic";

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
            <h4>
              Made by{" "}
              <a
                href="https://swapnilsparsh.github.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Swapnil Srivastava on Github"
              // title="Github (External Link)"
              >
                {" "}
                Swapnil Srivastava
              </a>{" "}

              and

              <a
                href="https://jatiinyadav.github.io"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Jatin Yadav on Github"
              // title="Github (External Link)"
              >
                {" "}
                Jatin Yadav
              </a>
            </h4>
            <br />
            <p style={{ color: "white" }} aria-label="Copyright by DevEmpire">Copyright © {year} DevEmpire</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default Footer;

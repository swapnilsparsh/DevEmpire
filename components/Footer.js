import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <footer className="copyright">
        <div className="footer-question">
          <p>
            Want your company&apos;s student program to be listed / unlisted?
            <a
              href="https://twitter.com/swapnilsparsh"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Contact Us
            </a>
          </p>
          <hr />
          <h4>
            Made with ❤️ & ☕ by{" "}
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
            &nbsp; and
            <a
              href="https://github.com/iamutkarshmall"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Utkarsh Mall 
            </a>
          </h4>
        </div>
        <div class="waves" >
          <div class="wave" id="wave1"></div>
          <div class="wave" id="wave2"></div>
          <div class="wave" id="wave3"></div>
          <div class="wave" id="wave4"></div>
          
        </div>
      </footer>
    </div>
  );
};

export default Footer;

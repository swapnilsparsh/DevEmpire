import React from "react";

const Footer = () => {
  return (
    <div>
      <footer class="copyright">
        <div className="footer-question">
          <p>
            Want your company's student program to be listed / unlisted?
          <a
            href="https://twitter.com/swapnilsparsh"
            target="_blank"
            rel="noreferrer"
          >
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
            Designed by
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
    </div>
  );
};

export default Footer;
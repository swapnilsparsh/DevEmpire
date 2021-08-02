import React from "react";
import Background from "../assets/img/Developer-Society-bg.png";
import DSC from "../assets/img/dsc.png";
import Github from "../assets/img/github.png";
import MLSA from "../assets/img/mlsa.png";
import "../App.css";
import Footer from "../Footer/footer";

const Content = () => {
  return (
    <div>
      <img src={Background} alt="" />
      <div className="container">
        <div className="card">
          <div className="content">
            <h3 style={{ left: "4rem" }}>
              Developer Student <br /> Clubs
            </h3>
            <img
              style={{
                height: "160px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src={DSC}
              alt=""
            />
            <a
              href="https://developers.google.com/community/dsc"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h3>Microsoft Learn Student Ambassador</h3>
            <img
              style={{
                height: "160px",
                width: "100%",
                objectFit: "cover",
                background: "white",
                borderRadius: "10px",
              }}
              src={MLSA}
              alt=""
            />
            <a
              href="https://studentambassadors.microsoft.com/"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="card">
          <div className="content">
            <h3 style={{ left: "5rem" }}>
              Github Campus <br /> Expert
            </h3>
            <img
              style={{
                height: "160px",
                width: "100%",
                objectFit: "cover",
                background: "white",
                borderRadius: "10px",
              }}
              src={Github}
              alt=""
            />
            <a
              href="https://education.github.com/experts"
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Four</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Five</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Six</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Seven</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Eight</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Nine</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Ten</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Eleven</h3>
            <a href="#">Read More</a>
          </div>
        </div>

        <div class="card">
          <div class="content">
            <h3>Card Twelve</h3>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Content;

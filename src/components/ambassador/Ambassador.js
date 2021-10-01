import Datas from "./Ambassador-Data";
import { useState, React } from "react";
import { Link } from "react-scroll";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Ambassador</h1>

            <Link to="container" smooth={true} duration={1000}>
              <h4>Explore all</h4>
            </Link>

            <div className="search-container">
              <i class="fa fa-search search-icon"></i>

              <input
                className="search"
                text="type"
                placeholder="Search"
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="container">
        <div className="align-flex">
          {Datas.filter((data) => {
            if (searchTerm === "") {
              return data;
            } else if (
              data.head.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
          }).map((data) => {
            return (
              <div className="frame-border">
                <div className="pointer"></div>
                <div class="card">
                  <div class="content">
                    <a href={data.link} target="_blank" rel="noreferrer">
                      <h3>{data.head}</h3>
                      <img src={data.image} alt={data.alt}></img>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;

import Datas from "../js-toolkits/JSToolkits-Data";
import { useState, React } from "react";
import { Link } from "react-scroll";

const Content = () => {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <>
        <div className="container-landing">
          <div className="landing-page-header">
            <div className="header-details">
              <h1>JS Toolkits</h1>

              <p>While the number of ways to organize JavaScript is almost infinite, here are some collection of JS framework and libraries that can help you while you are working on a project or searching around the web.</p>

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
                  <div class="card-js">
                    <div class="content">
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <h3>{data.head}</h3>
                        <img src={data.image} alt={data.alt}></img>
                      </a>
                      <p>{data.about}</p>
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

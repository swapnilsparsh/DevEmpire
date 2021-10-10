import Datas from "../js-toolkits/JSToolkits-Data";
import NoResults from "../NoResults";
import { useState, useEffect, React } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const filterOptions = searchTerm !== ""
    ? Datas.filter((data) => data.head.toLowerCase().includes(searchTerm.toLowerCase()))
    : Datas;

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
              <i className="fa fa-search search-icon"></i>

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
          {filterOptions.length > 0 ? (
            filterOptions.map((data) => (
                <div className="frame-border" key={`${data.head}_${data.link}`}>
                  <div className="pointer"></div>
                  <div className="card-js">
                    <div className="content">
                      <a href={data.link} target="_blank" rel="noreferrer">
                        <h3>{data.head}</h3>
                        <img src={data.image} alt={data.alt}></img>
                      </a>
                      <p>{data.about}</p>
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <NoResults search={searchTerm} />
          )}
        </div>
      </div>
    </>
  );
};

export default Content;

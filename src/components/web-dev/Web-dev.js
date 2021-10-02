import Datas from "../web-dev/Web-dev-data";
import { useState, useEffect, React } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { pathname } = useLocation();
  const [selectedLabel, setSelectedLabel] = useState("");
  const labels = [
    ...new Set(
      Datas.map((data) => {
        if (!data.label) return null;
        return data.label;
      })
    ),
  ].filter((label) => label);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Web Dev Tools</h1>
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
        <div className="label-container">
          <span
            className="label"
            style={
              selectedLabel === ""
                ? { color: "white", background: "orange", border: "none" }
                : {}
            }
            onClick={() => {
              setSelectedLabel("");
            }}
          >
            All
          </span>
          {labels.map((label) => {
            return (
              <span
                className="label"
                style={
                  selectedLabel === label
                    ? { color: "white", background: "#0093ed" }
                    : {}
                }
                onClick={() => {
                  setSelectedLabel(label);
                }}
              >
                {label}
              </span>
            );
          })}
        </div>
      </div>

      <div className="container" id="container">
        <div className="align-flex">
          {Datas.filter((data) => {
            if (selectedLabel === "") return data;
            else if (data.label === selectedLabel) {
              return data;
            }
          })
            .filter((data) => {
              if (searchTerm === "") {
                return data;
              } else if (
                data.head.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return data;
              }
            })
            .map((data) => {
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

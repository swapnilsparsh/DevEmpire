import Datas from "../components/programs/Programs-Data";
import NoResults from "../components/NoResults";
import { useState, useEffect, React } from "react";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import Card from "../components/Card/Card";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [pathname]);

  const filterOptions =
    searchTerm !== ""
      ? Datas.filter((data) =>
          data.head.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : Datas;

  return (
    <>
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Open Source Programs</h1>

            <p>
              Here you can find all the resources and details of Open Source
              Programs and event that are available across different countries.
            </p>

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
            filterOptions.map((data, indx) => (
              <Card
                about={data.about}
                alt={data.alt}
                head={data.head}
                image={data.image}
                link={data.link}
                key={indx}
              />
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

import Datas from "../components/data/ambassador";
import NoResults from "../components/Error/NoResults";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import img from "../public/assets/ambassador-img/AWSHeroes.webp"
import Card from "../components/Card/Card";
import ReactPaginateComponent from "../components/Pagination/ReactPaginateComponent";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredPageNumber, setFilteredPageNumber] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const cardsPerPage = 12;

  const labels = [...new Set(Datas.flatMap((data) => {
    if (data.label) {
      return data.label;
    }
    return [];
  }))];

  const highlightSearchTerm = (text) => {
    if (searchTerm !== "") {
      return text.replace(
        new RegExp(searchTerm, "gi"),
        (match) =>
          `<mark style="background: #2769AA; color: white;">${match}</mark>`
      );
    }
    return text;
  };

  // Update filter options whenever searchTerm or selectedLabel changes
  useEffect(() => {
    const filteredOptions =
      (selectedLabel !== "" || searchTerm !== "")
        ? Datas.filter(
          (data) =>
            data.label?.includes(selectedLabel) &&
            (data.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
              data.about.toLowerCase().includes(searchTerm.toLowerCase()))
        ).map(({ head, about, ...data }) => ({
          ...data,
          head: highlightSearchTerm(head),
          about: highlightSearchTerm(about),
        }))
        : Datas;
    setFilterOptions(filteredOptions);
  }
    , [searchTerm, selectedLabel]);


  // Update displayed cards based on filter options and page number
  useEffect(() => {
    const cardsVisited = pageNumber * cardsPerPage;
    const filteredCardsVisited = filteredPageNumber * cardsPerPage;
    const displayed =
      searchTerm !== ""
        ? filterOptions.slice(
          filteredCardsVisited,
          filteredCardsVisited + cardsPerPage
        )
        : filterOptions.slice(cardsVisited, cardsVisited + cardsPerPage);
    setDisplayCards(displayed);
  }, [filterOptions, pageNumber, filteredPageNumber, searchTerm]);

  const pageCount = Math.ceil(filterOptions.length / cardsPerPage);

  const changePageNumber = ({ selected }) => {
    if (searchTerm !== "") {
      setFilteredPageNumber(selected);
    } else {
      setPageNumber(selected);
    }
  };

  return (
    <>
      <div className="bg">

        <div className="container-landing" >
          <div className="landing-page-header">
            <div className="header-details">
              <h1>Ambassador</h1>

              <p>
                Find the perfect program for you from 75+ ambassador and fellowship programs from all over the world
              </p>

              <Link to="container" smooth={true} duration={1000}>
                <h4>Explore all</h4>
              </Link>

              <div className="search-container">
                <i className="fa fa-search search-icon"></i>
                <input
                  className="search"
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                    setFilteredPageNumber(0);
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
                  key={label}
                  className="label"
                  style={
                    selectedLabel === label
                      ? { color: "white", background: "#0093ed" }
                      : {}
                  }
                  onClick={() => {
                    setSelectedLabel(label);
                    setFilteredPageNumber(0);
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
            {displayCards.length > 0 ? (
              displayCards.map((data, indx) => (
                <Card
                  image={data.image}
                  alt={data.alt}
                  link={data.link}
                  head={data.head}
                  about={data.about}
                  key={indx}
                />
              ))
            ) : (
              <NoResults search={searchTerm} />
            )}
          </div>
          <ReactPaginateComponent
            pageNumber={pageNumber}
            pageCount={pageCount}
            changePage={changePageNumber}
            forcePage={searchTerm !== "" ? filteredPageNumber : pageNumber}
          />
        </div>
      </div>

    </>
  );
};

export default Content;

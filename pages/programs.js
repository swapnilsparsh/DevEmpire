import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import Card from "../components/Card/Card";
import ReactPaginateComponent from "../components/Pagination/ReactPaginateComponent";
import NoResults from "../components/Error/NoResults";
import ProgramsData from "../components/data/programs";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredPageNumber, setFilteredPageNumber] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState("");
  const cardsPerPage = 12;

  const labels = [...new Set(ProgramsData.map((data) => data.label))].filter(
    Boolean
  );

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

  const filterOptions = useMemo(() => {
    const filteredData = ProgramsData.filter(
      ({ label, head, about }) =>
        (selectedLabel === "" || label === selectedLabel) &&
        (searchTerm === "" ||
          head.toLowerCase().includes(searchTerm.toLowerCase()) ||
          about.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return filteredData.map(({ head, about, ...data }) => ({
      ...data,
      head: highlightSearchTerm(head),
      about: highlightSearchTerm(about),
    }));
  }, [ProgramsData, selectedLabel, searchTerm]);

  const displayedCards = useMemo(() => {
    const cardsVisited = pageNumber * cardsPerPage;
    const filteredCardsVisited = filteredPageNumber * cardsPerPage;

    const displayed =
      searchTerm !== ""
        ? filterOptions.slice(
          filteredCardsVisited,
          filteredCardsVisited + cardsPerPage
        )
        : filterOptions.slice(cardsVisited, cardsVisited + cardsPerPage);

    return displayed;
  }, [
    filterOptions,
    searchTerm,
    pageNumber,
    filteredPageNumber,
    cardsPerPage,
  ]);

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
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Open Source Programs</h1>
            <p>
              Looking for an open-source program to apply to? You're just a click away. Find all the details right here!
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
                onChange={(event) =>
                  setSearchTerm(event.target.value)}
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
              setFilteredPageNumber(0);
            }}
          >
            All
          </span>
          {labels.map((label) => (
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
          ))}
        </div>
      </div>

      <div className="container" id="container">
        <div className="align-flex">
          {displayedCards.length > 0 ? (
            displayedCards.map((data, index) => (
              <Card
                key={index}
                about={data.about}
                alt={data.alt}
                head={data.head}
                image={data.image}
                link={data.link}
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
    </>
  );
};

export default Content;

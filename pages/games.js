import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Card from "../components/Card/Card";
import ReactPaginateComponent from "../components/Pagination/ReactPaginateComponent";
import NoResults from "../components/Error/NoResults";
import Games from "../components/data/games";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredPageNumber, setFilteredPageNumber] = useState(0);
  const [filterOptions, setFilterOptions] = useState([]);
  const [displayCards, setDisplayCards] = useState([]);
  const cardsPerPage = 12;

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

  // Update filter options whenever searchTerm changes
  useEffect(() => {
    const filteredOptions =
      searchTerm !== ""
        ? Games.filter(({ head, about }) =>
          (head.toLowerCase() + about.toLowerCase()).includes(
            searchTerm.toLowerCase()
          )
        ).map(({ head, about, ...data }) => ({
          ...data,
          head: highlightSearchTerm(head),
          about: highlightSearchTerm(about),
        }))
        : Games;
    setFilterOptions(filteredOptions);
  }, [searchTerm]);

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
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Games</h1>
            <p>
              Ever heard of 'All work and no play makes the developer dull'? Here's your chance to mix some play into your work!
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
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="container">
        <div className="align-flex">
          {displayCards.length > 0 ? (
            displayCards.map((data, index) => (
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
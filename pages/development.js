import Datas from "../components/data/webdev";
import NoResults from "../components/Error/NoResults";
import { useState, useMemo } from "react";
import { Link } from "react-scroll";
import Card from "../components/Card/Card";
import ReactPaginateComponent from "../components/Pagination/ReactPaginateComponent";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredPageNumber, setFilteredPageNumber] = useState(0);
  const [selectedLabel, setSelectedLabel] = useState("");
  const cardsPerPage = 12;

  const labels = useMemo(() => {
    return [
      ...new Set(
        Datas.map((data) => {
          if (!data.label) return null;
          return data.label;
        })
      ),
    ].filter((label) => label);
  }, []);

  const highlightSearchTerm = (text) => {
    if (searchTerm !== "") {
      return text.replace(
        new RegExp(searchTerm, "gi"),
        (match) => `<mark style="background: #2769AA; color: white;">${match}</mark>`
      );
    }
    return text;
  };

  const filteredOptions = useMemo(() => {
    if (selectedLabel !== "" || searchTerm !== "") {
      return Datas.filter(
        (data) =>
          (selectedLabel === "" || data.label === selectedLabel) &&
          (searchTerm === "" ||
            data.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
            data.about.toLowerCase().includes(searchTerm.toLowerCase()))
      ).map((data) => ({
        ...data,
        head: highlightSearchTerm(data.head),
        about: highlightSearchTerm(data.about),
      }));
    }
    return Datas;
  }, [Datas, selectedLabel, searchTerm]);

  const displayCards = useMemo(() => {
    const startIndex = searchTerm !== "" ? filteredPageNumber * cardsPerPage : pageNumber * cardsPerPage;
    return filteredOptions.slice(startIndex, startIndex + cardsPerPage);
  }, [filteredOptions, filteredPageNumber, pageNumber, searchTerm]);

  const pageCount = Math.ceil(filteredOptions.length / cardsPerPage);

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
            <h1>Web Development Tools</h1>
            <p>
              Power up your website with awesome tools from CSS generators and stock photos, to icons, illustrations,
              vectors and so much more, all at one place
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
            style={selectedLabel === "" ? { color: "white", background: "orange", border: "none" } : {}}
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
              style={selectedLabel === label ? { color: "white", background: "#0093ed" } : {}}
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
          {displayCards.length > 0 ? (
            <CardList cards={displayCards} />
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

const CardList = ({ cards }) => (
  <>
    {cards.map((data, indx) => (
      <Card
        image={data.image}
        alt={data.alt}
        link={data.link}
        head={data.head}
        about={data.about}
        key={indx}
      />
    ))}
  </>
);

export default Content;

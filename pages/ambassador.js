 gmmr-issue
/** @format */

import Datas from '../components/ambassador/Ambassador-Data';
import NoResults from '../components/NoResults';
import { useState, useEffect, React } from 'react';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Card from '../components/Card/Card';
import ReactPaginate from 'react-paginate';
import Datas from "../components/ambassador/Ambassador-Data";
import NoResults from "../components/NoResults";
import { useState, React } from "react";
import { Link } from "react-scroll";
import Card from "../components/Card/Card";
import ReactPaginateComponent from "../components/ReactPaginateComponent";
 master

const Content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pageNumber, setPageNumber] = useState(0);
  const [filteredPageNumber, setfilteredPageNumber] = useState(0);

  const cardsPerPage = 12;

  const filterOptions =
 gmmr-issue
    searchTerm !== ''
      ? Datas.filter((data) =>
          data.head.toLowerCase().includes(searchTerm.toLowerCase())
        )

    searchTerm !== ""
      ? Datas.filter((data) => {
          return data.head.toLowerCase().includes(searchTerm.toLowerCase());
        })
 master
      : Datas;

  const cardsVisited = pageNumber * cardsPerPage;
  const filteredCardsVisited = filteredPageNumber * cardsPerPage;

  const displayCards = filterOptions.slice(
    searchTerm !== "" ? filteredCardsVisited : cardsVisited,
    (searchTerm !== "" ? filteredCardsVisited : cardsVisited) + cardsPerPage
  );
  const pageCount = Math.ceil(filterOptions.length / cardsPerPage);

  const changePageNumber = ({ selected }) => {
    if (searchTerm !== "") {
      setfilteredPageNumber(selected);
    } else {
      setPageNumber(selected);
    }
  };

  return (
    <>
      <div className="container-landing">
        <div className="landing-page-header">
          <div className="header-details">
            <h1>Ambassador</h1>

            <p>
              A place where you can find all the resources and details of
              ambassador/fellowship that is available across different
              companies.
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
                  setfilteredPageNumber(0);
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" id="container">
        <div className="align-flex">
          {displayCards.length > 0 ? (
            displayCards.map((data, indx) => (
              <Card
                key={indx}
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
 gmmr-issue
        <ReactPaginate
          previousLabel={<i className="fa fa-chevron-left"></i>}
          nextLabel={<i className="fa fa-chevron-right"></i>}
          pageCount={cardsCount}
          onPageChange={changeCard}
          containerClassName={'paginationBttns'}
          disabledLinkClassName={'disabledLinkClassName'}
          activeClassName={'paginationActive'}

        <ReactPaginateComponent
          pageNumber={pageNumber}
          pageCount={pageCount}
          changePage={changePageNumber}
          forcePage={searchTerm !== "" ? filteredPageNumber : pageNumber}
 master
        />
      </div>
    </>
  );
};

export default Content;

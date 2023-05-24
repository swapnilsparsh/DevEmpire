import React from "react";
import ReactPaginate from "react-paginate";

export default function ReactPaginateComponent({
  pageCount,
  changePage,
  forcePage,
}) {
  return (
    <ReactPaginate
      previousLabel={<i className="fa fa-chevron-left"></i>}
      nextLabel={<i className="fa fa-chevron-right"></i>}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      disabledLinkClassName={"disabledLinkClassName"}
      activeClassName={"paginationActive"}
      forcePage={forcePage}
    />
  );
}

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function ReactPaginateComponent({
  pageCount,
  changePage,
  forcePage,
  pageNumber,
}) {
  const [prePageNumber, setPrePageNumber] = useState(0);
  useEffect(() => {
    if (pageNumber > 0) {
      setPrePageNumber(pageNumber);
    }
  }, [pageNumber]);

  if (prePageNumber !== 0) {
    window.scrollTo({ top: 300, behavior: "smooth" });
  }

  return (
    <ReactPaginate
      previousLabel={
        pageNumber === 0 ? null : <i className="fa fa-chevron-left"></i>
      }
      nextLabel={
        pageNumber === pageCount - 1 ? null : (
          <i className="fa fa-chevron-right"></i>
        )
      }
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      disabledLinkClassName={"disabledLinkClassName"}
      activeClassName={"paginationActive"}
      forcePage={forcePage}
    />
  );
}

import React from "react";
import SearchNotFound from "../assets/svg/SearchNotFound.svg";

export default function NoResults({ search }) {
  return (
    <div className="content">
      <img src={SearchNotFound} alt="not-found" width={350} height={350} />
      <div className="noresult-description">
        <h1>No Results found for '{search}'</h1>
        <p>
          Check your spelling and try again, or search for something different.
        </p>
      </div>
    </div>
  );
}

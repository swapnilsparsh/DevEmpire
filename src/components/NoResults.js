import React from "react";
import SearchNotFound from "../assets/svg/SearchNotFound.svg";

export default function NoResults({ search }) {
  return (
    <div>
      <img src={SearchNotFound} alt="not-found" className='noresult-image' />
      <div className="noresult-description">
        <h1>No Results found for '{search}'</h1>
        <p>
          Check your spelling and try again🙂
        </p>
      </div>
    </div>
  );
}

import React from "react";
import SearchNotFound from "../public/assets/svg/SearchNotFound.svg";
import Image from "next/image";

export default function NoResults({ search }) {
  return (
    <div>

      <div className="noresult-description">
        <h1>No Results found for &apos;{search}&apos;</h1>
        <p>
          Check your spelling and try again🙂
        </p>
      </div>
      <br />
      <Image src={SearchNotFound} alt="not-found" className='noresult-image' />
    </div>
  );
}

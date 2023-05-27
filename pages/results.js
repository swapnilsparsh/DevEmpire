import { useRouter } from 'next/router';
import React from 'react'
import Card from '../components/Card/Card';
import NoResults from '../components/NoResults';
import AmbassadorDatas from "../components/ambassador/Ambassador-Data";
import ProgramsDatas from "../components/programs/Programs-Data";
import WebData from "../components/web-dev/Web-dev-data";
import GamesData from "../components/games/Games-Data";
import JstoolkitsData from "../components/js-toolkits/JSToolkits-Data";

const Content = () => {
  const Datas = AmbassadorDatas.concat(ProgramsDatas, WebData, GamesData, JstoolkitsData);
  const router = useRouter();
  var searchTerm = router.query.term;
  if(!searchTerm){
    () => router.push('/')
    searchTerm="";
  }
  const searchResults =
    searchTerm !== ""
      ? Datas.filter((data) =>
        data.head.toLowerCase().includes(searchTerm.toLowerCase()) || data.about.toLowerCase().includes(searchTerm.toLowerCase())
      )
      : [];
  return (
      <div className="container result-container" id="container">
        {(searchResults.length)?<div className='search-result-count'>Showing {searchResults.length} results found ...</div>:<></>}
        <div className="align-flex">
          {searchResults.length > 0 ? (
            searchResults.map((data, index) => (
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
      </div>
  )
}

export default Content;
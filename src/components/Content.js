import "../sass/style.css";
import Datas from "./Datas";
import { useState, React } from "react";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <input
        text="type"
        placeholder="e.g. 'women'"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      <div className="container" id="container">
        <div className="align-flex">
          {Datas.filter((data) => {
            if (searchTerm === "") {
              return data;
            } else if (
              data.head.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
          }).map((data) => {
            return (
              <div className="frame-border">
                <div className="pointer"></div>
                <div class="card">
                  <div class="content">
                    <a href={data.link} target="_blank" rel="noreferrer">
                      <h3>{data.head}</h3>
                      <img src={data.image} alt={data.alt}></img>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Content;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'
import { Hourglass } from "react-loader-spinner";
import SearchResults from "../pages/SearchResults";
import SuggestionBox from "./SuggestionBox"
const Search = () => {
  const [Suggestion, setSuggestion] = useState(false);
 
  const [openItems, setOpenItems] = useState(false);
  const [input, setInput] = useState(false);
 
  const handleClick = (event) => {
    setSuggestion((current) => !current);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      
      window.location.href = `/searchresults?q=${input}`;
    }
  };

  

 
  return (
    <>
      <div className="search" onClick={handleClick}>
        <input
          type="search"
          placeholder="Search"
          onInput={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <img src="/search_icon.png" alt="search-icon" height={25} />
      </div>
     { (Suggestion &&
        input !== null &&
        input !== undefined &&
        input.length != 0 && <SuggestionBox />)}
      {/* {console.log(Array.isArray(suggestionItem))} */}
      {/* {loading && (
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      )} */}
      
      
    </>
  );
};

export default Search;

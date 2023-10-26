import React, { useState} from "react";
import SuggestionBox from "./SuggestionBox"
const Search = () => {
  const [Suggestion, setSuggestion] = useState(false); 
  const [input, setInput] = useState(false);
  
  const handleClick = (event) => {
    setSuggestion(true);
  };
  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setSuggestion(false);
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
        input.length !== 0 && <SuggestionBox />)}     
      
    </>
  );
};

export default Search;

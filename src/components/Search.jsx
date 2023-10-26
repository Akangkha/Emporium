import React, { useState} from "react";
import SuggestionBox from "./SuggestionBox"
const Search = () => {
  const [Suggestion, setSuggestion] = useState(false); 
  const [input, setInput] = useState(false);
  
  const handleClick = (event) => {   //for triggering the latest trends box when search is clicked
    setSuggestion(true);
  };
  
  const handleKeyDown = (event) => {  //to route to the result page after the user presses enter
    if (event.key === "Enter" && input!=='' && input!==false) {
      setSuggestion(false);
      window.location.replace(`/searchresults?q=${input}`);
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

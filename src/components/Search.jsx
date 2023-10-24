import React, { useState, useEffect } from "react";
import axios from "axios";
import { Watch } from "react-loader-spinner";
import SearchResults from "../pages/SearchResults";
const Search = () => {
  const [Suggestion, setSuggestion] = useState(false);
  const [suggestionItem, setSuggestionItem] = useState([]);
  const [openItems, setOpenItems] = useState(false);
  const [input, setInput] = useState(false);
  const [loading, setLoading] = useState(true);
  const handleClick = (event) => {
    setSuggestion((current) => !current);
  };
  let p = [];
  const options = {
    method: "GET",
    url: "https://asos-com1.p.rapidapi.com/products/search?q=${input}",
    headers: {
      "X-RapidAPI-Key": "45dee0f5bcmshdb1d818c09840ecp1a7aaejsn2e687ba933c3",
      "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
    },
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setOpenItems(true);
      window.location.pathname = "/searchresults";
    }
  };

  const transition = (e) => {
    window.location.pathname = "/searchresults";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setSuggestionItem(response.data.data.products);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [input]);

  if (loading) {
    return <p>Loading........</p>;
  }
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
      {/* (Suggestion &&
        suggestionItem !== null &&
        suggestionItem !== undefined &&
        suggestionItem.length != 0 && <SuggestionBox trends={suggestionItem} />) */}
      {/* {console.log(Array.isArray(suggestionItem))} */}
      {openItems && !loading && <SearchResults suggestionItem={suggestionItem} />}
     
       </>
  );
};

export default Search;

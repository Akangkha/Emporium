import React, { useState } from "react";
import SuggestionBox from "./SuggestionBox";
import ResultsMain from "./ResultsMain";
import axios from "axios";
const Search = () => {
  const [Suggestion, setSuggestion] = useState(false);
  const [suggestionItem, setSuggestionItem] = useState([]);
  const [input, setInput] = useState();
  const handleClick = (event) => {
    setSuggestion((current) => !current);
    getCategories();
  };
  let p = [];
  const options = {
    method: "GET",
    url: "https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm",
    params: {
      searchTerm: "dress",
      currency: "USD",
      country: "US",
      store: "US",
      languageShort: "en",
      sizeSchema: "US",
      limit: "50",
      offset: "0",
    },
    headers: {
      "X-RapidAPI-Key": "45dee0f5bcmshdb1d818c09840ecp1a7aaejsn2e687ba933c3",
      "X-RapidAPI-Host": "asos10.p.rapidapi.com",
    },
  };
  async function getCategories() {
    try {
      const response = await axios.request(options);
      setSuggestionItem(response.data.data.products);
    } catch (error) {
      console.error(error);
    }
  }
  if (suggestionItem != null) {
    p = suggestionItem;
    console.log(p);
  }
  return (
    <>
      <div className="search" onClick={handleClick}>
        <input
          type="search"
          placeholder="Search"
          onInput={(e) => setInput(e.target.value)}
        />
        <img src="/search_icon.png" alt="search-icon" height={25} />
      </div>
      {/* {Suggestion &&
        suggestionItem !== null &&
        suggestionItem !== undefined &&
        suggestionItem.length != 0 && <SuggestionBox trends={suggestionItem} />}
      {console.log(Array.isArray(suggestionItem))} */}

      <ResultsMain input={input} />
    </>
  );
};

export default Search;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ResultsFilter from "../components/ResultsFilter";
import Search from "../components/Search";
import ResultsCard from "../components/ResultsCard";
import debounce from "lodash/debounce";
const SearchResults = (props) => {
  const [loading, setLoading] = useState(false);
  const [suggestionItem, setSuggestionItem] = useState([]);

  const searchParams = new URLSearchParams(window.location.search);
  const receivedData = searchParams.get("q");

  const options = {
    method: "GET",
    url: "https://asos-com1.p.rapidapi.com/products/search",
    params: {
      q: `${receivedData}`,
    },
    headers: {
      "X-RapidAPI-Key": "7853b079f8msh7003c72521c9ba3p1992dejsnd3676587477e",
      "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setSuggestionItem(response.data.data.products);
      if (suggestionItem) setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, 2500);
  useEffect(() => {
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, []);

  return (
    <>
      <Search />
      <div
        className="SearchResults"
        style={{
          display: "flex",
          height: "200vh",
          width: "100vw",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <ResultsFilter />

        <div className="Results_main">
          {suggestionItem.map((item, index) => (
            <ResultsCard imageUrl={item.imageUrl} key={index} name={item.name} current={item.price.current.text} rrp={item.price.rrp.text} />
          ))}
        </div>
      </div>
      </>
  );
};

export default SearchResults;

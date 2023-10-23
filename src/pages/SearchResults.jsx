import React from "react";
import ResultsMain from "../components/ResultsMain";
import ResultsFilter from "../components/ResultsFilter";
import Search from "../components/Search";
const SearchResults = (props) => {
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
          overflowX: "hidden",
        }}
      >
        <ResultsFilter />
        <ResultsMain />
      </div>
    </>
  );
};

export default SearchResults;

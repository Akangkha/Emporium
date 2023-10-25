import React from "react";
import SuggestionCard from "./SuggestionCard";

const SuggestionBox = () => {
  return (
    <div className="SuggestionBox">
      <h4>Latest Trends</h4>
      <div className="trends">
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
        <SuggestionCard/>
       
    </div>

    <div className="popularSuggestion">
      <h4>Popular Suggestion</h4>
      <p>Striped shirt dress</p>
      <p>Satin shirts</p>
      <p>Denim jumpsuit</p>
     
    </div>
    </div>
  );
};

export default SuggestionBox;

import React from "react";
import SuggestionCard from "./SuggestionCard";

const SuggestionBox = (props) => {
  return (
    <div className="SuggestionBox">
      Latest Trends
      <div className="trends">{props.map(() => {
        console.log(props.trends);
        <SuggestionCard/>
       
      })}</div>
    </div>
  );
};

export default SuggestionBox;

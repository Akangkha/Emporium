import React from "react";
import ResultsCard from "./ResultsCard";
const Results_main = ({suggestionItem}) => {
  return (
    <div className="Results_main">
  
      <ResultsCard suggestionItem={suggestionItem} />
      
    </div>
  );
};

export default Results_main;

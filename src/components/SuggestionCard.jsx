import React from "react";
const SuggestionCard = (props) => {
  return (
    <>
      <div>
      <img src={props.photos} alt="Trending item photos"></img>
      <p>{props.categories}</p>
      </div>;
    </>
  );
};

export default SuggestionCard;

import React from "react";
const SuggestionCard = ({name,url}) => {
  //receives the name and image for the latest trends section cards
  return (
    <>
      <div >
      <img src={url} alt="Trending item photos" width="120" style={{margin:"8px"}} draggable="false"></img>
      <p>{name}</p>
      </div>
    </>
  );
};

export default SuggestionCard;

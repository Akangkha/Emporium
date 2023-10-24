import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ResultsCard = ({suggestionItem}) => {
  const [iconColor, setIconColor] = useState("black"); // Initial color

  let price = 500;
  const handleColor = () => {
    // Change the color when the icon is clicked
    setIconColor(iconColor === "red" ? "black" : "red");
  };
  console.log("heyy");
  console.log(suggestionItem);
  return (
    <div className="ResultsCard">
      <div className="productImage">
        <img
          src="https://i.pinimg.com/236x/6e/ab/70/6eab70851dc07ad6db48971ecb0d7fd0.jpg"
          width="80%" alt="product"
        ></img> 
         <FavoriteIcon
          onClick={handleColor}
          style={{ color: iconColor, position: "relative", bottom:"275px", right:"40px"}}
        />
        
      </div>
      <p>Round neck cotton Tee</p>
      <div>
        <span style={{ textDecoration: "line-through" }}>{price}</span>
        <span style={{ color: "#6D84FF", fontWeight: "bold" }}>
          {" "}
          Rs.{price - (price * 10) / 100}
        </span>
      </div>
      <div>
        <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
        <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
        <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
        <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
        <StarIcon style={{ color: "#FDD33D", fontSize: "1.2rem" }} />
        <span>(210)</span>
      </div>
    </div>
  );
};

export default ResultsCard;

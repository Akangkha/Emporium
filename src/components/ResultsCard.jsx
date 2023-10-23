import React from 'react'
import StarIcon from "@mui/icons-material/Star";
const ResultsCard = () => {
  let price=500;
  return (
    <div className='ResultsCard'>
      <img src="https://i.pinimg.com/236x/6e/ab/70/6eab70851dc07ad6db48971ecb0d7fd0.jpg" width="80%"></img>
      <p>Round neck cotton Tee</p>
      <div>
        <span style={{textDecoration: 'line-through'}}>{price}</span>
        <span style={{color: '#6D84FF', fontWeight:"bold"}}> Rs.{price - price * 10 /100}</span>
      </div>
      <div>
      <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
      <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
      <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
      <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
      <StarIcon style={{ color: "#FDD33D",fontSize:"1.2rem" }} />
      <span >(210)</span>
      </div>
    </div>
  )
}

export default ResultsCard

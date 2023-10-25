import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import axios from "axios";
const SuggestionBox = () => {
  const [trends, setTrends] = useState([]);

  const options = {
    method: "GET",
    url: "https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list",
    params: {
      country: "us",
      lang: "en",
      currentpage: "0",
      pagesize: "10",
    },
    headers: {
      "X-RapidAPI-Key": "45dee0f5bcmshdb1d818c09840ecp1a7aaejsn2e687ba933c3",
      "X-RapidAPI-Host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com",
    },
  };

  async function fetchTrends() {
    try {
      const response = await axios.request(options);
      setTrends(response.data.results);
     
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTrends();
  }, []);

  
  return (
    <div className="SuggestionBox">
      <h4>Latest Trends</h4>
      <div className="trends">
        {trends.map((item, index) => (
          <SuggestionCard name={item.name} url={item.images[0].url}/>
        ))}
      </div>

      <div className="popularSuggestion">
        <h4>Popular Suggestion</h4>
        <p>Striped shirt dress</p>
        <p>Satin shirts</p>
        <p>Denim jumpsuit</p>
        <p>Leather dresses</p>
        <p>Solid tshirt</p>
      </div>
    </div>
  );
};

export default SuggestionBox;

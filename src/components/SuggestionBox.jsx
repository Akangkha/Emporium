import React, { useEffect, useState } from "react";
import SuggestionCard from "./SuggestionCard";
import { Hourglass } from "react-loader-spinner";
import axios from "axios";
const SuggestionBox = () => {
  //component which is visible when user clicks the search bar or writes anything 
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
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

  async function fetchTrends() {   //API call for the latest trends data
    setLoading(true);
    try {
      const response = await axios.request(options);
      setTrends(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrends();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="SuggestionBox">
      <h4>Latest Trends</h4>
      <div className="trends">
        {!loading ? (
          trends.map((item, index) => (
            <SuggestionCard name={item.name} url={item.images[0].url} />  //displaying latest trends data 
          ))
        ) : (
          <Hourglass
            visible={true}
            height="80"
            width="80"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#A2A0A4", "#FFBA9F"]}
          />
        )}
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

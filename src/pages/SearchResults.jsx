import React, { useState, useEffect } from "react";
import axios from "axios";
import ResultsFilter from "../components/ResultsFilter";
import { Hourglass } from "react-loader-spinner";
import Search from "../components/Search";
import ResultsCard from "../components/ResultsCard";
import debounce from "lodash/debounce";
import MenuIcon from "@mui/icons-material/Menu";
const SearchResults = (props) => {
  const [loading, setLoading] = useState(false);
  const [suggestionItem, setSuggestionItem] = useState([]);
  const [isComponentVisible, setComponentVisibility] = useState(true);
  const [dataNotFound, setDataNotFound] = useState(false);
 

  const handleTriggerClick = () => {
    setComponentVisibility(!isComponentVisible);
  };

  const searchParams = new URLSearchParams(window.location.search);
  const receivedData = searchParams.get("q");
  const options = {
    method: "GET",
    url: "https://asos-com1.p.rapidapi.com/products/search",
    params: {
      q: `${receivedData}`,
    },
    headers: {
      "X-RapidAPI-Key": "7853b079f8msh7003c72521c9ba3p1992dejsnd3676587477e",
      "X-RapidAPI-Host": "asos-com1.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setSuggestionItem(response.data.data.products);
      if (suggestionItem) setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const debouncedFetchData = debounce(fetchData, 2500);
  useEffect(() => {
    debouncedFetchData();

    return () => {
      debouncedFetchData.cancel();
    };
  }, []);
  var filteredd = [];
  const handleFilterChange = (selectedFilter) => {
    console.log(selectedFilter);
    setLoading(true);
    setDataNotFound(true);
    if (selectedFilter.option1) {
      filteredd = suggestionItem.filter(
        (item) => item.brandName === "Bolongaro Trevor"
      );
    }
    if (selectedFilter.option2) {
      filteredd = suggestionItem.filter(
        (item) => item.brandName === "Calvin Klein"
      );
    }
    if (selectedFilter.option3) {
      filteredd = suggestionItem.filter(
        (item) => item.price.current.value < 100
      );
    }
    if (selectedFilter.option4) {
      filteredd = suggestionItem.filter(
        (item) =>
          item.price.current.value > 100 && item.price.current.value < 500
      );
    }
    
    setSuggestionItem(filteredd);
    setLoading(false);
    if (filteredd.length === 0) {
      setDataNotFound(true);
      fetchData()
    }
  };
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
          overflow: "hidden",
        }}
      >
        <MenuIcon
          style={{ position: "absolute", top: "30px", left: "10px" }}
          className="menu"
          onClick={handleTriggerClick}
        />
        {isComponentVisible && (
          <ResultsFilter onFilterChange={handleFilterChange} />
        )}

        <div className="Results_main">
          {!loading ? (
            suggestionItem.map((item, index) => (
              <ResultsCard
                imageUrl={item.imageUrl}
                key={index}
                name={item.name}
                current={item.price.current.text}
                rrp={item.price.rrp.text}
              />
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
          {!loading && dataNotFound && suggestionItem.length==0 && <p>Sorry , such items are not present in the store !</p>}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

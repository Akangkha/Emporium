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
    //for the filter sidebar
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
      "X-RapidAPI-Key": "0c0cba9361msh98fbd891a5430bdp1d3a67jsn286403253036",
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

  const debouncedFetchData = debounce(fetchData, 2500); //this is to control the rate of API calls
  useEffect(() => {
    debouncedFetchData();
    return () => {
      debouncedFetchData.cancel();
    };
    // eslint-disable-next-line
  }, []);

  var filteredd = [];
  const handleFilterChange = (selectedFilter) => {
    //receives the selected value from the child component and checks for the filter and stores the filtered data for the same
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

    setSuggestionItem(filteredd); //filtered data is stored for it to be displayed
    setLoading(false);
    if (filteredd.length === 0) {
      setDataNotFound(true); //in-case no data is available for the filter preferences
      fetchData();
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
            <div style={{ display:"flex",flexWrap:"wrap",width:"100%" }}>
              {suggestionItem.map((item, index) => (
                <ResultsCard //displays the data
                  imageUrl={item.imageUrl}
                  key={index}
                  name={item.name}
                  current={item.price.current.text}
                  rrp={item.price.rrp.text}
                />
              ))}
            </div>
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
          {!loading && dataNotFound && suggestionItem.length === 0 && (
            <p>Sorry , such items are not present in the store !</p>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchResults;

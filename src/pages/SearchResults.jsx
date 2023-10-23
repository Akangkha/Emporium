import React from 'react'
import ResultsMain from "../components/ResultsMain";
import ResultsFilter  from '../components/ResultsFilter';
const SearchResults = () => {
  return (
    <div style={{display:'flex', height:'200vh', width:'100vw', backgroundColor:'white', overflowX:"hidden"}}>
    <ResultsFilter/>
    <ResultsMain/>
    </div>
  )
}

export default SearchResults

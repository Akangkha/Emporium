import "./App.scss";
import Search from "./components/Search";
import SearchResults from "./pages/SearchResults";
function App() {
  return (
    <div className="App">
      <img src="/logo.png" className="Logo" alt="company_logo" />
      {/* <Search/> */}
      <SearchResults />
    </div>
  );
}

export default App;

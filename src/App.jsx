import "./App.scss";
import Search from "./components/Search";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <img
        src="/logo.png"
        className="Logo"
        alt="company_logo"
        draggable="false"
      />
      <Search/>
      <Router>
        <Routes>
          <Route path="/searchresults" element={<SearchResults />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

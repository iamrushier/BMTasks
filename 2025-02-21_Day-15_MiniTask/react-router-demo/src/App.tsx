import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSearchParams } from "react-router-dom";
function App() {
  const [searchText, setSearchText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const handleSearch = () => {
    setSearchParams({ query: searchText });
  };
  return (
    <>
      <div className="form-group d-flex">
        <input
          className="form-control"
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="btn btn-primary btn-sm" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="card">{searchParams.get("query")}</div>
    </>
  );
}

export default App;

import React, { useContext } from "react";
import "../App.css";
import { AppContext } from "../context/context";

const Search = () => {
  const { isError, setIsError, query, setQuery } = useContext(AppContext);

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="searchBar">
      <input
        className="inp"
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
};

export default Search;

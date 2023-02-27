import React, { useEffect, useState } from "react";

const API_URL = `https://api.tvmaze.com/search/shows`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("Dark");

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);
          console.log(data.length);

          if (data.length > 0) {
            setIsError({ show: false, msg: "" });
          } else {
            if (query.length > 0) {
              setIsError({ show: true, msg: "Invalid Search" });
            } else {
              setIsError({ show: true, msg: "Please search a TV Show" });
            }
          }
          setSeries(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${API_URL}?q=${query}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, setIsError, series, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };

import React, { useContext } from "react";
import { AppContext } from "../context/context";
import Error from "./Error";
import Search from "./Search";
import Series from "./Series";

const Home = () => {
  const { isError } = useContext(AppContext);

  return (
    <>
      <Search />

      {!isError.show ? <Series /> : <Error msg={isError.msg} />}
    </>
  );
};

export default Home;

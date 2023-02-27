import React from "react";
import { AppContext } from "../context/context";
import { useContext } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

const Series = () => {
  const { series, isLoading } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading ...</h3>
      </div>
    );
  }

  return (
    <div className="seriesSlate">
      {series.map((currSeries) => {
        if (currSeries.show.image != null) {
          return (
            <NavLink
              to={`/series/${currSeries.show.id}`}
              key={currSeries.show.id}
            >
              <img
                src={currSeries.show.image.medium}
                className="series"
                alt="Series poster"
              />
            </NavLink>
          );
        }
      })}
    </div>
  );
};

export default Series;

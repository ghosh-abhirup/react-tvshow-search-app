import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Bullets from "./Bullets";

const API_URL = `https://api.tvmaze.com/shows`;

const SingleSeries = () => {
  const { id } = useParams();
  const [tvShow, setTvShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      fetch(url)
        .then((data) => data.json())
        .then((data) => {
          console.log(data);

          setTvShow(data);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovies(`${API_URL}/${id}`);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (isLoading) {
    return (
      <div className="loading">
        <h3>Loading ...</h3>
      </div>
    );
  }

  return (
    <div className="background">
      <div className="singleSeries">
        <img src={tvShow.image.medium} alt="tvshow" className="tvImg" />
        <div className="details">
          <h3>{tvShow.name}</h3>
          <div
            className="lowFont"
            dangerouslySetInnerHTML={{
              __html:
                tvShow.summary.length > 350
                  ? tvShow.summary.substring(0, 350) + " ..."
                  : tvShow.summary,
            }}
          ></div>
          <div className="genres">
            <b>Genres:</b>
            {tvShow.genres.map((genre) => {
              return <Bullets title={genre} key={genre} />;
            })}
          </div>
          <p>
            <b>Language:</b> {tvShow.language}
          </p>
          <div className="dates">
            <p>
              <b>Premiered On:</b> {tvShow.premiered}
            </p>
            <p>
              <b>Ended On:</b>{" "}
              {tvShow.ended !== null ? tvShow.ended : "Premiering"}
            </p>
          </div>
          <div className="btn">
            <NavLink to={tvShow.officialSite} key={tvShow.id}>
              <button>Watch</button>
            </NavLink>
            <NavLink to={`/`} key={tvShow.id + 1}>
              <button>Go Back</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSeries;

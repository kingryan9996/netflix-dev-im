import React, { useState, CSSProperties, useEffect } from "react";
import { movieAction } from "../redux/actions/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import LoadingSpiner from "../components/LoadingSpiner";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  console.log(popularMovies);
  console.log(popularMovies.results);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    //컴포넌트 전체 리턴문에 조건을 걸어준다.
    return <LoadingSpiner />;
  }
  return (
    <div className="HomePage-wrap">
      <Banner movie={popularMovies?.results[0]} />
      <div className="HomePage-under-line">
        <h2>Popular Movie</h2>
        <MovieSlide movies={popularMovies} />
        <h2>Top Rated Movie</h2>
        <MovieSlide movies={topRatedMovies} />
        <h2>Upcoming Movie</h2>
        <MovieSlide movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import "../App.css";
import { Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const RecommendedMovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { moviesGenres, loading } = useSelector((state) => state.movie);
  //   console.log(moviesGenres.genres);
  const dispatch = useDispatch();

  const goMovieDetail = (item) => {
    // console.log(item);
    dispatch(movieAction.getMovieDetail(item.id));
    navigate(`/movies/${item.id}`);
  };
  return (
    <div
      onClick={() => goMovieDetail(item)}
      className="movieCard"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h3>{item.title}</h3>
        <div>
          {item.genre_ids.map((ids) => (
            <Badge bg="danger">
              {moviesGenres.find((item) => item.id == ids).name}
            </Badge>
          ))}
        </div>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : "전체이용가"}</span>
        </div>
      </div>
    </div>
  );
};

export default RecommendedMovieCard;

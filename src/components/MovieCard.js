import React from "react";
import "../App.css";
import Badge from "react-bootstrap/Badge";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieAction } from "../redux/actions/movieAction";

const MovieCard = ({ item }) => {
  const navigate = useNavigate();
  const { moviesGenres, loading } = useSelector((state) => state.movie);
  //   console.log(moviesGenres);
  const dispatch = useDispatch();

  const goMovieDetail = (item) => {
    // console.log(item);
    dispatch(movieAction.loadingChange());
    navigate(`/movies/${item.id}`);
  };
  // console.log("이거하고", item);
  // poster_path

  return (
    <div
      className="HomePageCard-wrap"
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` +
          ")",
      }}
    >
      <div className="overlay">
        <h3 className="moviesPageCard-title">{item.title}</h3>
        <div className="moviesPageCard-genre">
          {item.genre_ids.map((ids) => (
            <Badge bg="danger">
              {moviesGenres.find((item) => item.id == ids).name}
            </Badge>
          ))}
        </div>
        {/* <div>
          <span className="moviesPageCard-vote">{item.vote_average}</span>
          <span className="moviesPageCard-adult">
            {item.adult ? "청불" : "전체이용가"}
          </span>
        </div> */}
        <div
          className="moviesPageCard-learn-more"
          onClick={() => goMovieDetail(item)}
        >
          자세히보러가기
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

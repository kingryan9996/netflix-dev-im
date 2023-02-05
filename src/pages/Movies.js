import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Badge, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../App.css";
import { movieAction } from "../redux/actions/movieAction";
import MovieSlide from "../components/MovieSlide";
import RecommendedMovieCard from "../components/RecommendedMovieCard";
import MovieDetailModal from "../components/MovieDetailModal";
import DropdownSort from "../components/DropdownSort";
import YearFilter from "../components/YearFilter";
import LoadingSpiner from "../components/LoadingSpiner";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { popularMovies, moviesGenres, loading } = useSelector(
    (state) => state.movie
  );

  // console.log("popularMovies", popularMovies.results);
  // console.log("moviesGenres", moviesGenres);
  // console.log(
  //   "1221212",
  //   movieYoutubeId.results[movieYoutubeId.results.length - 1].key
  // );
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const goMovieDetail = (item) => {
    // console.log(item);
    dispatch(movieAction.loadingChange());
    navigate(`/movies/${item.id}`);
  };

  useEffect(() => {
    dispatch(movieAction.getMoviesPage());
  }, []);

  const goRecommendedMovies = () => {
    // console.log(item);
    // navigate(`/movies/${item.title}`, { state: { item } });
  };

  if (loading) {
    return <LoadingSpiner />;
  }
  return (
    <div
      className="movieDetailPage"
      // style={{
      //   backgroundColor: "rgba(0, 0, 0, 0.5)",
      // }}
    >
      {/* {console.log("이거랑", recommendedMovies.results)}
      {recommendedMovies.results.map((item) => console.log(item, "24441"))} */}
      {/* {console.log(
        movieDetail.genres.map(
          (ids) => moviesGenres.genres.find((item) => item.id == ids.id).name
        )
      )}
      {console.log("moviesGenres.genres", moviesGenres.genres)} */}
      <Container>
        {/* <Col>
            <DropdownSort />
            <YearFilter popularMovies={popularMovies} />
            솔트버튼 / 필터버튼
          </Col> */}
        <Row>
          {/* <Col> */}
          <div className="moviesPageCardWrap">
            {popularMovies.results.map((item, idx) => {
              return (
                <div
                  style={{
                    backgroundImage:
                      "url(" +
                      `https://www.themoviedb.org/t/p/w440_and_h660_face${item.backdrop_path}` +
                      ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="moviesPageCard"
                >
                  <div className="moviesPageCard-content">
                    <div className="moviesPageCard-title">{item.title}</div>
                    <div className="moviesPageCard-release-date">
                      출시일{item.release_date}
                    </div>
                    <div className="moviesPageCard-genre">
                      {item.genre_ids.map((ids) => (
                        <Badge bg="danger">
                          {moviesGenres.find((genre) => genre.id == ids).name}
                        </Badge>
                      ))}
                    </div>
                    <div className="moviesPageCard-overview">
                      <p>{item.overview}</p>
                    </div>
                    {/* <div className="moviesPageCard-vote">
                      평점 {item.vote_average} / 관람객수 {item.vote_count}
                      청불여부{item.adult}
                        <Badge bg="danger">
                          {item.adult ? "청소년관람불가" : "전체이용가"}
                        </Badge>
                    </div> */}
                    <div
                      className="moviesPageCard-learn-more"
                      onClick={() => goMovieDetail(item)}
                    >
                      Learn More
                    </div>
                  </div>
                </div>
              );
            })}

            {/* {movieDetail.genres?.map((ids) => (
                <Badge bg="danger">
                  {moviesGenres.genres.find((item) => item.id == ids.id).name}
                </Badge>
              ))} */}
          </div>
          {/* <h2>{movieDetail.title}</h2>
            <h4>{movieDetail.original_title}</h4>
            <span>{movieDetail.vote_average}</span>
            <span>{movieDetail.popularity}</span>
            <span>{movieDetail.adult ? "청불" : "전체이용가"}</span>
            <div>{movieDetail.overview}</div>
            <div>개봉일:{movieDetail.release_date}</div> */}
          {/* </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;

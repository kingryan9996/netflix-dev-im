import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Badge, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../App.css";
import { movieAction } from "../redux/actions/movieAction";
import RecommendedMovieCard from "../components/RecommendedMovieCard";
import MovieDetailModal from "../components/MovieDetailModal";
import LoadingSpiner from "../components/LoadingSpiner";

const Search = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [queryState, setQueryState] = useState();
  const { searchMovie, moviesGenres, loading } = useSelector(
    (state) => state.movie
  );
  console.log(params.id);
  console.log(queryState);
  // console.log(
  //   "1221212",
  //   movieYoutubeId.results[movieYoutubeId.results.length - 1].key
  // );
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  // console.log(searchMovie?.results[0], "121231");
  // console.log(moviesGenres, "121231");

  useEffect(() => {
    dispatch(movieAction.getSearchPage(params.id));
    // console.log("123123+", searchMovie);
  }, []);

  const goMovieDetail = (item) => {
    // console.log(item);
    dispatch(movieAction.loadingChange());
    navigate(`/movies/${item.id}`);
  };

  const goRecommendedMovies = () => {
    // console.log(item);
    // navigate(`/movies/${item.title}`, { state: { item } });
  };
  // console.log(searchMovie.results, "찐막");

  if (loading) {
    return <LoadingSpiner />;
  }
  if (searchMovie.results.length == 0) {
    return <div>찾으시는 결과가 없습니다.</div>;
  } else {
    return (
      <div
        className="moviesPageCardWrap"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Container>
          <Row>
            <div className="moviesPageCardWrap">
              {searchMovie.results.map((item) => (
                <div
                  style={{
                    backgroundImage:
                      "url(" +
                      `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}` +
                      ")",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  className="moviesPageCard"
                >
                  <div className="moviesPageCard-content">
                    <div className="moviesPageCard-title">{item.title}</div>
                    <div className="moviesPageCard-release-date">
                      2출시일{item.release_date}
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
                      평점 {item.vote_average} / 관람객수 {item.vote_count}/
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
              ))}
            </div>
          </Row>
        </Container>
        {/* {console.log(movieDetail)} */}
        {/* {console.log("이거랑", recommendedMovies.results)}
        {recommendedMovies.results.map((item) => console.log(item, "24441"))} */}
        {/* {console.log(
          movieDetail.genres.map(
            (ids) => moviesGenres.genres.find((item) => item.id == ids.id).name
          )
        )}
        {console.log("moviesGenres.genres", moviesGenres.genres)} */}
      </div>
    );
  }
};

export default Search;

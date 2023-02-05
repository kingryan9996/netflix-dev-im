import React, { useEffect, useState } from "react";
import { Container, Row, Col, Carousel, Badge, Button } from "react-bootstrap";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import "../App.css";
import { movieAction } from "../redux/actions/movieAction";
import MovieDetailSlide from "../components/MovieDetailSlide";
import RecommendedMovieCard from "../components/RecommendedMovieCard";
import MovieDetailModal from "../components/MovieDetailModal";
import LoadingSpiner from "../components/LoadingSpiner";

const MovieDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const {
    moviesGenres,
    loading,
    movieDetail,
    movieReview,
    recommendedMovies,
    movieYoutubeId,
  } = useSelector((state) => state.movie);

  // console.log(params.id);
  // console.log(movieYoutubeId, "++++++++22222");
  // console.log("1221212", movieYoutubeId.results);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1441 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1440, min: 1025 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    if (loading == true) {
      dispatch(movieAction.getMovieDetail(params.id));
    }
  }, [loading]);

  const goRecommendedMovies = () => {
    // console.log(item);
    // navigate(`/movies/${item.title}`, { state: { item } });
  };

  if (loading) {
    return <LoadingSpiner />;
  }
  return (
    <div
      className="MovieDetailPage-wrap"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      {/* {console.log(movieDetail)} */}
      {/* {console.log("이거랑", recommendedMovies.results)}
      {recommendedMovies.results.map((item) => console.log(item, "24441"))} */}
      {/* {console.log(
        movieDetail.genres.map(
          (ids) => moviesGenres.genres.find((item) => item.id == ids.id).name
        )
      )}
      {console.log("moviesGenres.genres", moviesGenres.genres)} */}
      <Container>
        <Row className="MovieDetailPage-first-line">
          <Col>
            <img
              className="MovieDetailPage-Img"
              src={`https://www.themoviedb.org/t/p/w440_and_h660_face${movieDetail.backdrop_path}`}
            />
          </Col>
          <Col>
            <div className="MovieDetailPage-genre">
              {movieDetail.genres?.map((ids) => (
                <Badge bg="danger">
                  {moviesGenres.find((item) => item.id == ids.id).name}
                </Badge>
              ))}
            </div>
            <h2 className="MovieDetailPage-title">{movieDetail.title}</h2>
            <h4 className="MovieDetailPage-ori-title">
              {movieDetail.original_title}
            </h4>
            {/* <span className="MovieDetailPage-vote">
              {movieDetail.vote_average}
            </span>
            <span className="MovieDetailPage-popularity">
              {movieDetail.popularity}
            </span> */}
            {/* <span>{movieDetail.adult ? "청불" : "전체이용가"}</span> */}
            <div className="MovieDetailPage-overview">
              {movieDetail.overview}
            </div>
            <div className="MovieDetailPage-release-date">
              개봉일:{movieDetail.release_date}
            </div>
            <div className="MovieDetailPage-modal">
              <Button variant="danger" onClick={() => setModalShow(true)}>
                공식 예고편
              </Button>

              <MovieDetailModal
                movieYoutubeId={
                  movieYoutubeId.results[movieYoutubeId.results.length - 1]?.key
                }
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
            <div className="MovieDetailPage-review">
              <h2>영화리뷰</h2>
              {movieReview.results.map((item, idx) => {
                if (idx < 1) {
                  return (
                    <div className="MovieDetailPage-review-content">
                      <h3>작성자 : {item.author}</h3>
                      <div>{item.content}</div>
                    </div>
                  );
                }
              })}
            </div>
          </Col>
        </Row>
      </Container>
      <div className="MovieDetailPage-second-line">
        <h2>추천영화</h2>

        <MovieDetailSlide movies={recommendedMovies} />
        {/* <Carousel responsive={responsive}>
              {recommendedMovies.results.map((item) => (
                <RecommendedMovieCard
                  onClick={() => goRecommendedMovies()}
                  item={item}
                />
              ))}
            </Carousel> */}

        {/* <div
            className="recommendedMovieCard"
            onClick={() => goRecommendedMovies()}
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w440_and_h660_face${recommendedMovies.results[0].backdrop_path}` +
                ")",
            }}
          >
            <div className="recommendedMovieCardOverlay">
              <div>{recommendedMovies.results[0].title}</div>
              <h3>{recommendedMovies.results[0].title}</h3>
              <div>
                {movieDetail.genres.map((ids) => (
                  <Badge bg="danger">
                    {moviesGenres.genres.find((item) => item.id == ids.id).name}
                  </Badge>
                ))}
              </div>
              <div>
                <span>{recommendedMovies.results[0].vote_average}</span>
                <span>
                  {recommendedMovies.results[0].adult ? "청불" : "전체이용가"}
                </span>
              </div>
            </div>
          </div> */}
      </div>
    </div>
  );
};

export default MovieDetail;

import axios from "axios";
import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KOR&page=1`
      );
      const topRatedMovieApi = api.get(
        `/movie/top_rated?api_key=${API_KEY}&language=ko-KOR&page=1`
      );
      const upComingMovieApi = api.get(
        `/movie/upcoming?api_key=${API_KEY}&language=ko-KOR&page=1`
      );
      const moviesGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      let [popularMovies, topRatedMovies, upComingMovies, moviesGenres] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upComingMovieApi,
          moviesGenresApi,
        ]);

      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          moviesGenres: moviesGenres.data.genres,
        },
        //axios 는 .data안에 데이터필드에 값이 있다.
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
  };
}
function getMoviesPage() {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });
      const popularMovieApi = api.get(
        `/movie/popular?api_key=${API_KEY}&language=ko-KOR&page=1`
      );
      const moviesGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      let [popularMovies, moviesGenres] = await Promise.all([
        popularMovieApi,
        moviesGenresApi,
      ]);

      dispatch({
        type: "GET_MOVIES_PAGE_SUCCESS",
        payload: {
          popularMovies: popularMovies.data,
          moviesGenres: moviesGenres.data.genres,
        },
        //axios 는 .data안에 데이터필드에 값이 있다.
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIE_DETAIL_FAILURE" });
    }
  };
}

function getSearchPage(query) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const searchMovieApi = api.get(
        `/search/movie?api_key=b3ad35eb69ff38b25eab7238856be22f&language=ko&query=${query}&page=1&include_adult=false`
      );
      const moviesGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      let [searchMovie, moviesGenres] = await Promise.all([
        searchMovieApi,
        moviesGenresApi,
      ]);
      console.log(searchMovie, "+112121212");
      dispatch({
        type: "GET_MOVIE_SEARCH_SUCCESS",
        payload: {
          searchMovie: searchMovie.data,
          moviesGenres: moviesGenres.data.genres,
        },
        //axios 는 .data안에 데이터필드에 값이 있다.
      });
    } catch {}
  };
}
function getMovieDetail(movie_id) {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_MOVIES_REQUEST" });

      const detailMovieApi = api.get(
        `/movie/${movie_id}?api_key=${API_KEY}&language=ko`
      );

      const movieReviewApi = api.get(
        `/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en&page=1`
      );
      const recommendedMoviesAPI = api.get(
        `/movie/${movie_id}/recommendations?api_key=${API_KEY}&language=ko&page=1`
      );
      const moviesGenresApi = api.get(
        `/genre/movie/list?api_key=${API_KEY}&language=ko`
      );
      const moviesIdApi = api.get(
        `/movie/${movie_id}/videos?api_key=${API_KEY}&language=ko`
      );

      let [
        movieDetail,
        movieReview,
        recommendedMovies,
        moviesGenres,
        movieYoutubeId,
      ] = await Promise.all([
        detailMovieApi,
        movieReviewApi,
        recommendedMoviesAPI,
        moviesGenresApi,
        moviesIdApi,
      ]);

      dispatch({
        type: "GET_MOVIE_DETAIL_SUCCESS",
        payload: {
          movieDetail: movieDetail.data,
          movieReview: movieReview.data,
          recommendedMovies: recommendedMovies.data,
          moviesGenres: moviesGenres.data.genres,
          movieYoutubeId: movieYoutubeId.data,
        },
        //axios 는 .data안에 데이터필드에 값이 있다.
      });
    } catch (error) {
      //에러 핸들링
      dispatch({ type: "GET_MOVIE_DETAIL_FAILURE" });
    }
  };
}
function loadingChange() {
  return (dispatch) => {
    dispatch({ type: "GET_MOVIES_REQUEST" });
  };
}

export const movieAction = {
  getMovies,
  getMoviesPage,
  getMovieDetail,
  loadingChange,
  getSearchPage,
};

let initialState = {
  popularMovies: {},
  topRatedMovies: {},
  upComingMovies: {},
  moviesGenres: {},
  loading: true,
  movieDetail: {},
  movieReview: {},
  recommendedMovies: {},
  movieYoutubeId: {},
  searchMovie: {},
};

function movieReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { ...state, loading: true };
    case "GET_MOVIES_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        topRatedMovies: payload.topRatedMovies,
        upComingMovies: payload.upComingMovies,
        moviesGenres: payload.moviesGenres,
        loading: false,
      };
    case "GET_MOVIES_FAILURE":
      return { ...state, loading: false };
    case "GET_MOVIES_PAGE_SUCCESS":
      return {
        ...state,
        popularMovies: payload.popularMovies,
        moviesGenres: payload.moviesGenres,
        loading: false,
      };
    case "GET_MOVIE_SEARCH_SUCCESS":
      return {
        ...state,
        searchMovie: payload.searchMovie,
        moviesGenres: payload.moviesGenres,
        loading: false,
      };
    case "GET_MOVIE_DETAIL_SUCCESS":
      return {
        ...state,
        movieDetail: payload.movieDetail,
        movieReview: payload.movieReview,
        recommendedMovies: payload.recommendedMovies,
        moviesGenres: payload.moviesGenres,
        movieYoutubeId: payload.movieYoutubeId,
        loading: false,
      };
    case "GET_MOVIE_DETAIL_FAILURE":
      return { ...state, loading: false };
    default:
      return { ...state };
  }
}
export default movieReducer;

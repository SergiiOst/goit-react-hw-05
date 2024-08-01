import axios from "axios";

export const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const fetchMovies = async () => {
  const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw",
    },
  };
  const response = await axios.get(url, options);
  return response.data.movies;
};

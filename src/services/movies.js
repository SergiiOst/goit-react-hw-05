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
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMoviesById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovieCastById = async (id) => {
  const url = `//api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovieReviewById = async (id) => {
  const url = `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const fetchMovieSearchByQuery = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const options = {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzdhYTM5YWQ2YjI3Y2JkMmE2NjY5MzU2OTk2NDZlYiIsIm5iZiI6MTcyMjM4NTYzMS43MjkwNjQsInN1YiI6IjY2YTk3ZTU3ZjljOWY5ZjNhNGUzYWNmYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8mr7NgQY2zrMvlFcFKeR_4IuS5TONnUh_oIRniC1_cw",
    },
  };
  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};

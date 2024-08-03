import { useEffect, useState } from "react";
import { MovieList } from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/movies";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchMovies().then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <h1 className={s.title}>Trending movies</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;

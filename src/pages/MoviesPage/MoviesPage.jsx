import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { MovieList } from "../../components/MovieList/MovieList";
import { Field, Formik, Form } from "formik";
import { fetchMovieSearchByQuery } from "../../services/movies";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const currentQuery = searchParams.get("query");
    if (!currentQuery) return;

    const movieByQuery = async () => {
      try {
        setIsLoading(true);
        const getMovieByQuery = await fetchMovieSearchByQuery(currentQuery);
        setMovies(getMovieByQuery);
      } catch (error) {
        setError(`Sorry, some mistake! ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };
    movieByQuery();
  }, [searchParams]);

  const initialValues = {
    query: "",
  };

  const onSubmit = (values) => {
    const { query } = values;
    setSearchParams({ query });
  };

  return (
    <>
      <h1 className={s.title}>Search movies</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            name="query"
            type="search"
            placeholder="Search movies"
          />
          <button type="submit" className={s.btn}>
            Search
          </button>
        </Form>
      </Formik>
      {isLoading && <div>Movies is loading...</div>}
      {error && <div>Oops! Something went wrong</div>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </>
  );
};

export default MoviesPage;

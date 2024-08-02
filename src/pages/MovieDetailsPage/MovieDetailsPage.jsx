import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { BASE_IMG_URL, fetchMoviesById } from "../../services/movies";
import s from "./MovieDetailsPage.module.css";
import clsx from "clsx";

export const MovieDetailsPage = () => {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const defaultImg =
    "<https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg>";
  const infoClass = ({ isActive }) => {
    return clsx(s.info, isActive && s.active);
  };
  useEffect(() => {
    const getMovieById = async () => {
      try {
        const movieById = await fetchMoviesById(params.movieId);
        setMovie(movieById);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieById();
  }, [params.movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h1 className={s.title}>Movie Details</h1>
      <div className={s.content}>
        <img
          src={
            movie.poster_path
              ? `${BASE_IMG_URL}${movie.poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
        <div className={s.descrContainer}>
          <h3 className={s.movieTitle}>{movie.title}</h3>
          <h3 className={s.descrTitle}>Release date</h3>
          <p className={s.descrInfo}> {movie.release_date}</p>
          <h3 className={s.descrTitle}>Rating</h3>
          <p className={s.descrInfo}> {movie.vote_average}</p>
          <h3 className={s.descrTitle}>Overview</h3>
          <p className={s.descrInfo}>{movie.overview}</p>
        </div>
      </div>
      <h2 className={s.addInf}>Additional information</h2>
      <ul className={s.infoList}>
        <li>
          <NavLink to={"cast"} className={infoClass}>
            Movie Cast
          </NavLink>
        </li>
        <li>
          <NavLink to={"reviews"} className={infoClass}>
            Movie Review
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

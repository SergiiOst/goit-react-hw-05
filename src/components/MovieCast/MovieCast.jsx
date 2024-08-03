import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_IMG_URL, fetchMovieCastById } from "../../services/movies";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);
  const defaultImg =
    "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";
  useEffect(() => {
    const getCastById = async () => {
      try {
        const castById = await fetchMovieCastById(params.movieId);
        setCast(castById);
      } catch (error) {
        console.log(error);
      }
    };
    getCastById();
  }, [params.movieId]);

  return (
    <>
      <ul className={s.list}>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id} className={s.items}>
            <img
              src={profile_path ? `${BASE_IMG_URL}${profile_path}` : defaultImg}
              width={200}
              alt="actor img"
            />
            <h3>Actor name</h3>
            <p>{name}</p>
            <h3>Character</h3>
            <p>{character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieCast;

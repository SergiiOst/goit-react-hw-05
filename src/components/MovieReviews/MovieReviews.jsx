import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviewById } from "../../services/movies";
import s from "./MovieReviews.module.css";

export const MovieReviews = () => {
  const params = useParams();
  const [review, setReview] = useState([]);
  useEffect(() => {
    const getReviewById = async () => {
      try {
        const reviewById = await fetchMovieReviewById(params.movieId);
        setReview(reviewById);
      } catch (error) {
        console.log(error);
      }
    };
    getReviewById();
  }, [params.movieId]);

  return (
    <>
      {review.length === 0 && (
        <div className={s.noReview}>
          Sorry...There are no reviews for this movie!
        </div>
      )}
      <ul className={s.list}>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <h3 className={s.autorName}>Author: {author}</h3>
            <p className={s.review}>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MovieReviews;

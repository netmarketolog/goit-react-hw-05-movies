import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from 'components/api/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    movieReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => {
            const { id, author, content } = review;
            return (
              <li key={id}>
                <h2>Author: {author}</h2>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};

export default Reviews;

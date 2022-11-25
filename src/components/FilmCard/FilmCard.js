import { useLocation } from 'react-router-dom';
import error from '../img/error.png';
import { StyledList, Link, Poster } from './FilmCard.styled';
import PropTypes from 'prop-types';

export const FilmCard = ({ posterPath, title, movieId }) => {
  const location = useLocation();
  const filmPoster = `https://image.tmdb.org/t/p/w500/${posterPath}`;
  return (
    <StyledList>
      <Link to={`/movies/${movieId}`} state={{ from: location }}>
        <Poster src={posterPath ? filmPoster : error} alt={title} />
      </Link>
      <h2>{title}</h2>
    </StyledList>
  );
};

FilmCard.propTypes = {
  posterPath: PropTypes.string,
  title: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};

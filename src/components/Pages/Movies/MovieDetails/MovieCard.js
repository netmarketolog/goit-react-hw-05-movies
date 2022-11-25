import error from '../../../img/error.png';
import { Wrap, StyleImg, Description, PosterImg } from './movieCard.styled';
import PropTypes from 'prop-types';

export const MovieCard = ({
  poster_path,
  original_title,
  release_date,
  genres,
  overview,
  vote_average,
}) => {
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  return (
    <Wrap>
      <StyleImg>
        <PosterImg src={poster_path ? poster : error} alt={original_title} />
      </StyleImg>
      <Description>
        <h2>
          {original_title} ({release_date.slice(0.4)})
        </h2>
        <p>User Rating: {vote_average.toFixed(1) * 10}%</p>
        <div>
          <h3>Overview</h3>
          <p>{overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <p>
            {genres.map(genre => {
              return genre.name + ' ';
            })}
          </p>
        </div>
      </Description>
    </Wrap>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

import { useState, useEffect, Suspense } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { movieDetails } from 'api/api';
import { MovieCard } from './MovieCard';
import { Section } from '../../Pages/Movies/Movies.styled';
import { LinkButton, LinkBtn } from './MovieDetails.styled';

const MovieDetails = () => {
  const [film, setFilm] = useState({});
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;

    movieDetails(movieId).then(
      ({
        id,
        poster_path,
        original_title,
        release_date,
        genres,
        overview,
        vote_average,
      }) => {
        setFilm({
          id,
          poster_path,
          original_title,
          release_date,
          genres,
          overview,
          vote_average,
        });
      }
    );
  }, [movieId]);

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = film;

  return (
    <Section>
      <LinkButton>
        <LinkBtn to={location.state?.from ?? '/'}>Go Back</LinkBtn>
      </LinkButton>
      {film.id && (
        <MovieCard
          poster_path={poster_path}
          original_title={original_title ?? 'none'}
          release_date={release_date}
          genres={genres ?? [{ id: 1, name: 'none' }]}
          overview={overview ?? 'none'}
          vote_average={vote_average ?? 0}
        />
      )}
      <LinkButton>
        <LinkBtn to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </LinkBtn>
        <LinkBtn to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </LinkBtn>
      </LinkButton>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Section>
  );
};
export default MovieDetails;

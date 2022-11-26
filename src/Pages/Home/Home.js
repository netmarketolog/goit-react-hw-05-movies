import { useState, useEffect } from 'react';
import { trendingFilm } from 'api/api';
import { FilmCard } from 'components/FilmCard/FilmCard';

import { HomeList } from './Home.styled';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    trendingFilm().then(setFilms);
  }, []);

  return (
    <HomeList>
      {films.map(film => {
        const { id, poster_path, title, name } = film;

        return (
          <FilmCard
            key={id}
            posterPath={poster_path}
            title={title ?? name}
            movieId={id}
          />
        );
      })}
    </HomeList>
  );
};
export default Home;

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'api/api';
import { FilmCard } from 'components/FilmCard/FilmCard';
import { HiSearch } from 'react-icons/hi';
import {
  Section,
  Form,
  StyledInput,
  SearchButton,
  List,
} from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams('');
  const search = searchParams.get('search');

  const inputValue = e => {
    setQuery(e.target.value.toLowerCase());
  };

  useEffect(() => {
    if (!search) return;
    setStatus('loading');

    searchMovies(search).then(resp => {
      if (resp.data.total_results === 0) setStatus('error');
      setFilms(resp.filmList);
      setStatus('resolved');
    });
  }, [search]);

  const formSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') return;
    setSearchParams({ search: query });
    setQuery('');
  };
  return (
    <Section>
      <Form onSubmit={formSubmit}>
        <label>
          <StyledInput
            type="text"
            value={query}
            placeholder="Type your request"
            onInput={inputValue}
          />
        </label>
        <SearchButton type="submit">
          <HiSearch size="30px" />
        </SearchButton>
      </Form>
      {status === 'resolved' && films.length > 0 && (
        <List>
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
        </List>
      )}
    </Section>
  );
};
export default Movies;

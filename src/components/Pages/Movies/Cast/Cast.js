import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from 'components/api/api';
import error from '../../../img/error.png';
import { CastList, CastPhoto, CastItem } from './cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;

    movieCast(movieId).then(setActors);
  }, [movieId]);

  return (
    <CastList>
      {actors.map(actor => {
        const img = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;
        const { id, profile_path, name, character } = actor;

        return (
          <CastItem key={id}>
            <CastPhoto src={profile_path ? img : error} alt={name} />
            <h2>{name}</h2>
            <p>Character: {character}</p>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;

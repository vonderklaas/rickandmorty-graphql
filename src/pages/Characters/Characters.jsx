import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Characters.module.css';

import { Link } from 'react-router-dom';

// Custom GraphQL Hook
import { useCharacters } from '../hooks/useCharacters';

export const Characters = () => {
  const { error, loading, data } = useCharacters();

  if (loading) {
    return (
      <div>
        <p>Character</p>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Character</p>
        <p>ERROR, Something went wrong!</p>
      </div>
    );
  }

  return (
    <div>
      <p>Characters</p>
      <br />
      <div className={styles.CharacterList}>
        {data.characters.results.map((character) => {
          return (
            <Link
              to={`/${character.id}`}
              className={styles.CharacterListElement}
              key={character.id}
            >
              <p>{character.name}</p>
              <img src={character.image} alt={character.name} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

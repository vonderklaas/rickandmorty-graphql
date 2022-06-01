import React from 'react';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Character.module.css';

import { useParams } from 'react-router-dom';

// Custom GraphQL Hook
import { useCharacter } from '../../hooks/useCharacter';

export const Character = () => {
  const params = useParams();
  const { error, loading, data } = useCharacter(params.id);

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
      <p>Character</p>
      <div className={styles.Character}>
        <img src={data.character.image} alt={data.character.name} />
        <>
          <h1>{data.character.name}</h1>
          <p>{data.character.gender}</p>
          <h2>Episodes:</h2>
          {data.character.episode.map((episode, idx) => {
            return (
              <div key={idx}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </>
      </div>
    </div>
  );
};

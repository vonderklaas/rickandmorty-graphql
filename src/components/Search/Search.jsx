import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import Spinner from '../Spinner/Spinner';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export const Search = () => {
  const [name, setName] = useState('');

  const [getLocations, { error, loading, data }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  const handleClick = () => {
    getLocations();
    setName('');
  };

  return (
    <div>
      <p>Search</p>
      <p>For example: Morty Smith</p>
      <input
        value={name}
        type='text'
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Search</button>
      <br />
      {loading && <Spinner />}
      <br />
      {error && <p>ERROR, Something went wrong!</p>}
      <br />
      {data && (
        <ul style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {data.characters.results.map((character, idx) => {
            return <li key={idx}>{character.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

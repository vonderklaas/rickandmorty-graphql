import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <h1>React & GraphQL</h1>
      <h3>https://rickandmortyapi.com/graphql</h3>
      <div>
        <Link to='/'>Home </Link>
        <Link to='/search'>Locations</Link>
      </div>
    </nav>
  );
};

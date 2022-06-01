import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Characters } from './pages/Characters/Characters';
import { Character } from './pages/Character/Character';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h2>https://rickandmortyapi.com/graphql</h2>
      <br />
      <Routes>
        <Route path='/' element={<Characters />}></Route>
        <Route path='/:id' element={<Character />}></Route>
      </Routes>
    </div>
  );
};

export default App;

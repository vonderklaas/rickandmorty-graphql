import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Characters } from './pages/Characters/Characters';
import { Character } from './pages/Character/Character';
import { Search } from './components/Search/Search';
import { Navbar } from './components/Navbar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <br />
      <Routes>
        <Route path='/' element={<Characters />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/:id' element={<Character />}></Route>
      </Routes>
    </div>
  );
};

export default App;

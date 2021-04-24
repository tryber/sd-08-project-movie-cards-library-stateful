import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieList from './components/MovieList';
import dataMovies from './data';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <MovieList movies={ dataMovies } />
      <AddMovie />
    </div>
  );
}

export default App;

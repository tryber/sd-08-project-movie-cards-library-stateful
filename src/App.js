import React from 'react';
import './App.css';
// import MovieList from './components/MovieList';
import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';
import movies from './data';
// import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />

    </div>
  );
}

export default App;

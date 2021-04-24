import React from 'react';
import './App.css';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

import Movies from './data';

function App() {
  return (
    <div className="App">
      <Header />

      <MovieLibrary movies={ Movies } />
    </div>
  );
}

export default App;

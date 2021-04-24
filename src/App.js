import React from 'react';
import './App.css';
import movies from './data';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ movies } />
    </div>
  );
}
// consultei o repositorio de uma colega para a refatoração dos renders mencionado no ultimo commit.
// https://github.com/tryber/sd-08-project-movie-cards-library-stateful/blob/4f3d6d2173cad8164cd948a87d53cd55c2cf74ee/src/components/AddMovie.jsx
export default App;

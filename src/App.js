import React from 'react';
import './App.css';
// import AddMovie from './components/AddMovie';
// import SearchBar from './components/SearchBar';
import MovieLibrary from './components/MovieLibrary';
import data from './data';

import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={ data } />
      {/* <SearchBar />
      <AddMovie /> */}
    </div>
  );
}

export default App;

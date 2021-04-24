import React from 'react';
import './App.css';

import MovieLibrary from './components/MovieLibrary';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary />
    </div>
  );
}

export default App;

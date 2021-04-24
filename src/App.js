import React from 'react';
import MovieLibrary from './components/MovieLibrary';
import './App.css';

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

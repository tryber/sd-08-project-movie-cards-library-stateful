import React from 'react';
import './App.css';
import movies from './data';

import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieLibrary movies={ movies }/>
      </div>
    );
  }
}

export default App;

import React from 'react';
import './App.css';

import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddMovie from './components/AddMovie';
// import MovieLibrary from './components/MovieLibrary';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText="Texto mui legal!"
        onSearchTextChange="another"
        bookmarkedOnly="mrkonly"
        onBookmarkedChange="obchange"
        selectedGenre="action"
      />
      <AddMovie
        onSearchTextChange={ 0 }
        selectedGenre="action"
      />
    </div>
  );
}

export default App;

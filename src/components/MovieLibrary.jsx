// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
// import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  render() {
    // const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar />
        <AddMovie />
      </div>
    );
  }
}

export default MovieLibrary;

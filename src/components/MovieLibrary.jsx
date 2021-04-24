import React from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>
        <AddMovie onClick={ this.onClick } />
        <SearchBar />
      </div>

    );
  }
}

export default MovieLibrary;

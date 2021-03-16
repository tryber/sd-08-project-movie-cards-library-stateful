import React from 'react';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  addMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: movies.concat(newMovie) });
  }

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

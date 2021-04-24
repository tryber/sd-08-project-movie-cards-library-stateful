import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
// import movies from '../data';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      movies,
      // searchText: '',
      // bookmarkedOnly: false,
      // selectedGenre: '',
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  render() {
    const { movies } = this.state;
    // const filteredMovies = this.getFilteredMovies();
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.instanceOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

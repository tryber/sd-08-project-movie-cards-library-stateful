import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.searchHandler = this.searchHandler.bind(this);
    this.addMovieHandler = this.addMovieHandler.bind(this);
    this.filterHandler = this.filterHandler.bind(this);
  }

  searchHandler({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  addMovieHandler(movieObj) {
    this.setState((state) => ({
      movies: [...state.movies, movieObj],
    }));
  }

  filterHandler(moviesFilter) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let showMovies = moviesFilter
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    showMovies = !bookmarkedOnly
      ? showMovies
      : showMovies.filter((movie) => movie.bookmarked);
    return showMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const showMovies = this.filterHandler(movies);
    return (
      <div>
        <h2> My movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.searchHandler }
          onBookmarkedChange={ this.searchHandler }
          onSelectedGenreChange={ this.searchHandler }
        />
        <MovieList movies={ showMovies } />
        <AddMovie onClick={ this.addMovieHandler } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

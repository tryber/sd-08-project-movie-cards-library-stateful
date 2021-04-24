import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

export default class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      Movies: this.props.movies,
      displayMovies: this.props.movies,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.updateDisplayMovies = this.updateDisplayMovies.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  handleSearchChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState(
      (beforeState) => ({
        ...beforeState,
        [name]: value,
      }),
      this.updateDisplayMovies,
    );
    return value;
  }

  updateDisplayMovies() {
    const { Movies, searchText, bookmarkedOnly, selectedGenre } = this.state;
    const displayMovies = Movies.filter((movie) => this.mainFilter(movie, searchText, bookmarkedOnly, selectedGenre));
    this.setState((beforeState) => ({
      ...beforeState,
      displayMovies,
    }));
  }

  mainFilter(movie, searchText, bookmarkedOnly, selectedGenre) {
    return (
      (movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText))
      && (bookmarkedOnly ? movie.bookmarked === true : true)
      && (selectedGenre ? movie.genre === selectedGenre : true)
    );
  }

  addMovie(newEntieOfMovie) {
    this.setState(
      (beforeState) => ({
        ...beforeState,
        Movies: beforeState.Movies.concat(newEntieOfMovie),
      }),
      this.updateDisplayMovies,
    );
  }

  render() {
    return (
      <div>
        <SearchBar
          searchText={ this.state.searchText }
          onSearchTextChange={ this.handleSearchChange }
          bookmarkedOnly={ this.state.bookmarkedOnly }
          onBookmarkedChange={ this.handleSearchChange }
          selectedGenre={ this.state.selectedGenre }
          onSelectedGenreChange={ this.handleSearchChange }
        />
        <MovieList movies={ this.state.displayMovies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

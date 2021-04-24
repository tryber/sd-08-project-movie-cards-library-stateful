// implement MovieLibrary component here
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
      filteredMovies: movies,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => this.filterMovies());
  }

  filterMovies() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    let filteredMovies = movies;
    if (bookmarkedOnly) {
      filteredMovies = filteredMovies.filter((movie) => movie.bookmarked);
    }
    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText) {
      filteredMovies = filteredMovies.filter((movie) => movie.title
        .concat(movie.subtitle, movie.storyline).match(new RegExp(searchText, 'i')));
    }
    this.setState({ filteredMovies });
  }

  addMovies(obj) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, obj] }, () => this.filterMovies());
  }

  renderSearchBar() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleInputChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleInputChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleInputChange }
      />
    );
  }

  render() {
    const { filteredMovies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        { this.renderSearchBar() }
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovies } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

export default class MovieLibrary extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleFavMovie = this.handleFavMovie.bind(this);
    this.handleGenre = this.handleGenre.bind(this);
    this.onClick = this.onClick.bind(this);
    this.filterMovie = this.filterMovie.bind(this);
  }

  handleInput({ target }) {
    this.setState({
      searchText: target.value,
    });
  }

  handleFavMovie({ target }) {
    this.setState({
      bookmarkedOnly: target.checked,
    });
  }

  handleGenre({ target }) {
    this.setState({
      selectedGenre: target.value,
    });
  }

  onClick() {
    return ('oi');
  }

  filterMovie() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const { movies } = this.props;
    let favMovies = movies;
    let key = false;
    const result = movies.filter((movie) => movie.title.includes(searchText)
      || movie.subtitle.includes(searchText)
      || movie.storyline.includes(searchText));
    if (bookmarkedOnly) {
      favMovies = result.filter((movie) => movie.bookmarked === true);
      key = true;
    }
    if (selectedGenre.length > 0) {
      return favMovies.filter((movie) => movie.genre === selectedGenre);
    }
    if (key === true) return favMovies;
    return result;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    const result = this.filterMovie();
    return (
      <div>
        <SearchBar
          onSearchTextChange={ this.handleInput }
          searchText={ searchText }
          onBookmarkedChange={ this.handleFavMovie }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleGenre }
          selectedGenre={ selectedGenre }
        />
        <AddMovie onClick={ this.onClick } />
        <MovieList movies={ result } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

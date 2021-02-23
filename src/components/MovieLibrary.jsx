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

    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  handleSearchEvent({ target }) {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    });
  }

  handleAddMovie(objectMovie) {
    this.setState((currentState) => ({
      movies: [...currentState.movies, objectMovie],
    }));
  }

  handleFilter(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesToShow = movies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    moviesToShow = !bookmarkedOnly
      ? moviesToShow
      : moviesToShow.filter((movie) => movie.bookmarked);

    return moviesToShow;
  }

  render() {
    const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;
    const moviesToShow = this.handleFilter(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearchEvent }
          onBookmarkedChange={ this.handleSearchEvent }
          onSelectedGenreChange={ this.handleSearchEvent }
        />
        <MovieList movies={ moviesToShow } />
        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;

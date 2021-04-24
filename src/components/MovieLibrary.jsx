import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      'text-input': '',
      'checkbox-input': false,
      'select-input': '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value,
    });
  }

  handleAddMovie(movie) {
    this.setState(({ movies }) => (
      { movies: [...movies, movie] }
    ));
  }

  handleFilteredMovies() {
    const { 'text-input': searchText, 'checkbox-input': bookmarkedOnly,
      'select-input': selectedGenre, movies } = this.state;

    let moviesList = [...movies];

    if (searchText) {
      moviesList = moviesList.filter((movie) => (
        movie.title.includes(searchText)
         || movie.subtitle.includes(searchText)
         || movie.storyline.includes(searchText)
      ));
    } else if (selectedGenre) {
      moviesList = moviesList.filter((movie) => movie.genre.includes(selectedGenre));
    } else if (bookmarkedOnly) {
      moviesList = moviesList.filter((movie) => movie.bookmarked);
    }

    return moviesList;
  }

  SearchBar() {
    const {
      'text-input': searchText,
      'checkbox-input': bookmarkedOnly,
      'select-input': selectedGenre,
    } = this.state;

    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  render() {
    return (
      <div>
        { this.SearchBar() }

        <MovieList movies={ this.handleFilteredMovies() } />

        <AddMovie onClick={ this.handleAddMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

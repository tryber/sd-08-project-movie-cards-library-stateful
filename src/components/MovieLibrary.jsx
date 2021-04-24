import React from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const filterMov = value !== '' ? movies.filter((movie) => movie.title.includes(value)
    || movie.subtitle.includes(value)
    || movie.storyline.includes(value)) : movies;
    this.setState(() => ({ searchText: value, movies: filterMov }));
  }

  onBookmarkedChange({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    const favoriteMovie = checked ? movies.filter((movie) => movie.bookmarked) : movies;
    this.setState(() => ({ bookmarkedOnly: checked, movies: favoriteMovie }));
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    const { value } = target;
    const gen = value !== '' ? movies.filter((movie) => movie.genre === value) : movies;
    this.setState({ selectedGenre: value, movies: gen });
  }

  addMovie(newOne) {
    this.setState((oldState) => ({ movies: [...oldState.movies, newOne] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;

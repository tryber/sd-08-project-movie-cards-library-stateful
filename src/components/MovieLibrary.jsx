import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.submitNewMovie = this.submitNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;

    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;

    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;

    this.setState({
      selectedGenre: value,
    });
  }

  submitNewMovie(obj) {
    const { movies } = this.state;
    const rate = parseFloat(obj.rating);
    obj.rating = rate;

    this.setState({ movies: [...movies, obj] });
  }

  filterMovies(arr) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filterList = arr;
    if (bookmarkedOnly === true) {
      filterList = arr.filter((movie) => movie.bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      filterList = arr.filter((movie) => movie.genre === selectedGenre);
    }
    if (searchText !== '') {
      filterList = arr
        .filter((movie) => (movie.title.toLowerCase().includes(searchText.toLowerCase())
          || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
          || movie.storyline.toLowerCase().includes(searchText.toLowerCase())));
    }
    return filterList;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterMovies(movies) } />
        <AddMovie onClick={ this.submitNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

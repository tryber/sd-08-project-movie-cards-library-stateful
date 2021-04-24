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
    };
    this.isFavorite = this.isFavorite.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.filterByGenre = this.filterByGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  filterByGenre(event) {
    const { value } = event.target;
    const { movies } = this.state;
    this.setState({ selectedGenre: value }, () => {
      const filteredMovies = movies.filter((movie) => movie.genre === value);
      this.setState({ movies: filteredMovies });
    });
  }

  filterMovies(event) {
    const { value } = event.target;
    const { movies, searchText } = this.state;
    this.setState({ searchText: value }, () => {
      const filteredMovies = movies.filter(
        (movie) => movie.title.includes(searchText)
          || movie.subtitle.includes(value)
          || movie.storyline.includes(value),
      );
      this.setState({ movies: filteredMovies });
    });
  }

  isFavorite({ target }) {
    const { movies } = this.state;
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked }, () => {
      const moviesFiltered = movies.filter(
        (movie) => movie.bookmarked === checked,
      );
      this.setState({ movies: moviesFiltered });
    });
  }

  addMovie(addMovie) {
    const { movies } = this.state;
    this.setState(() => ({
      movies: [...movies, addMovie],
    }));
  }

  render() {
    const { movies } = this.state;
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.filterMovies }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.isFavorite }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.filterByGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}
MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;

// implement MovieLibrary component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    const { movies: moviesList } = this.props;

    this.state = {
      movies: moviesList,
      originalMovies: moviesList,
      searchText: '',
      selectedGenre: '',
      bookmarkedOnly: false,
    };
    this.addMovie = this.addMovie.bind(this);
    this.updateStates = this.updateStates.bind(this);
  }

  updateStates(e) {
    if (e.target.name === 'bookmarkedOnly') {
      const { bookmarkedOnly } = this.state;
      return this.setState({ bookmarkedOnly: !bookmarkedOnly }, () => {
        this.filterMovies();
      });
    }
    return this.setState({ [e.target.name]: e.target.value }, () => {
      this.filterMovies();
    });
  }

  filterMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, originalMovies } = this.state;
    let filter = originalMovies;
    if (searchText) {
      filter = filter.filter((e) => (e.title.toLowerCase().includes(searchText)
        || e.subtitle.toLowerCase().includes(searchText)
        || e.storyline.toLowerCase().includes(searchText)));
    }
    if (selectedGenre) { filter = filter.filter((e) => e.genre === selectedGenre); }
    if (bookmarkedOnly) {
      filter = filter.filter((e) => e.bookmarked === bookmarkedOnly);
    }
    this.setState({ movies: filter });
  }

  addMovie(movie) {
    const { originalMovies } = this.state;
    this.setState({ originalMovies: originalMovies.concat(movie) }, () => {
      this.filterMovies();
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.updateStates }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.updateStates }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.updateStates }
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterOptions = this.filterOptions.bind(this);
    this.addMovie = this.addMovie.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onBookmarkedChange(event) {
    const value = event.target.checked;
    this.setState({ bookmarkedOnly: value });
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  filterOptions() {
    const { movies, bookmarkedOnly, selectedGenre, searchText } = this.state;
    if (bookmarkedOnly) {
      return movies.filter((bookmarked) => bookmarked.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return movies.filter((genre) => genre.genre === selectedGenre);
    }
    return movies.filter((text) => text.title.includes(searchText)
      || text.subtitle.includes(searchText)
      || text.storyline.includes(searchText));
  }

  addMovie(newMovie) {
    this.setState(
      (previousState) => ({ movies: previousState.movies.concat(newMovie) }),
    );
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div className="library">
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filterOptions() } />
        <AddMovie addMovie={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.shape()).isRequired };

export default MovieLibrary;

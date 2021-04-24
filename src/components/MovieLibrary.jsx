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

    this.changeSearchText = this.changeSearchText.bind(this);
    this.ChangeBookmarked = this.ChangeBookmarked.bind(this);
    this.selectedGenre = this.selectedGenre.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  changeSearchText(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  ChangeBookmarked(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  selectedGenre(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  addMovie(movieAdd) {
    this.setState((previousState) => ({
      movies: [...previousState.movies, movieAdd],
    }));
  }

  filteredMovies() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state;

    return movies.filter((movie) => movie.title.includes(searchText)
    || movie.subtitle.includes(searchText)
    || movie.storyline.includes(searchText))
      .filter((movie) => (bookmarkedOnly ? movie.bookmarked === true : movie))
      .filter((movie) => movie.genre.includes(selectedGenre));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.changeSearchText }
          onbookmarkedOnlyChange={ bookmarkedOnly }
          onBookedMarked={ this.ChangeBookmarked }
          onSelectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.selectedGenre }
          movies={ movies }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieLibrary;

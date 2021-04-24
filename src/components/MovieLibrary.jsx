// implement MovieLibrary component here
import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.handleSearchTextChange = this.handleSearchTextChange.bind(this);
    this.handleBookmarkedOnly = this.handleBookmarkedOnly.bind(this);
    this.handleSelectedGenreChange = this.handleSelectedGenreChange.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
    this.updateMovies = this.updateMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: JSON.parse(JSON.stringify(movies)),
    };
  }

  handleSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  handleBookmarkedOnly(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    });
  }

  handleSelectedGenreChange(event) {
    this.setState({
      selectedGenre: event.target.value,
    });
  }

  updateMovies(newMovie) {
    const { movies } = this.state;
    movies.push(newMovie);
    this.setState({
      movies,
    });
  }

  movieIncludes(movie, searchText) {
    if (movie.title.includes(searchText)

    ) return true;
    return false;
  }

  applyFilter(moviesList) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovies = moviesList;
    if (bookmarkedOnly === true) {
      filteredMovies = moviesList.filter((movie) => movie.bookmarked === true);
    } if (searchText !== '') {
      filteredMovies = filteredMovies
        .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    } if (selectedGenre !== '') {
      filteredMovies = filteredMovies
        .filter((movie) => movie.genre === selectedGenre);
    }
    return filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleSelectedGenreChange }
        />
        <MovieList movies={ this.applyFilter(movies) } />
        <AddMovie onClick={ this.updateMovies } />
      </main>
    );
  }
}

export default MovieLibrary;

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

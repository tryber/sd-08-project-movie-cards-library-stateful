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
      searchText: '',
      bookmarkedOnly: '',
      selectedGenre: '',
      movies,
    };

    this.handleFilter = this.handleFilter.bind(this);
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.handleAddMovie = this.handleAddMovie.bind(this);
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
    const showMovies = this.handleFilter(movies);
    return (
      <main>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleSearchEvent }
          onBookmarkedChange={ this.handleSearchEvent }
          onSelectedGenreChange={ this.handleSearchEvent }
        />
        <MovieList movies={ showMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

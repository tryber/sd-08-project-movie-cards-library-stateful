import React from 'react';
import PropTypes from 'prop-types';

import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleEvent = this.handleEvent.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMovies = this.handleMovies.bind(this);
  }

  handleEvent({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: target.type === 'checkbox' ? target.checked : value,
    });
  }

  handleAdd(objMovie) {
    this.setState((currentState) => ({
      movies: [...currentState.movies, objMovie],
    }));
  }

  handleMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let moviesMost = movies
      .filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    moviesMost = !bookmarkedOnly
      ? moviesMost : moviesMost.filter((movie) => movie.bookmarked);
    return moviesMost;
  }

  render() {
    const { searchText, bookmarkedOnly, movies, selectedGenre } = this.state;
    const moviesMost = this.handleMovies(movies);
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleEvent }
          onBookmarkedChange={ this.handleEvent }
          onSelectedGenreChange={ this.handleEvent }
        />
        <MovieList movies={ moviesMost } />
        <AddMovie onClick={ this.handleAdd } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf().isRequired,
};

export default MovieLibrary;

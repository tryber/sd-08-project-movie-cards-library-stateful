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
    this.handleChange = this.handleChange.bind(this);
    this.filteredMovies = this.filteredMovies.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  filteredMovies() {
    const { searchText, selectedGenre, bookmarkedOnly, movies } = this.state;
    const allMovies = movies.filter((movie) => movie.title.toUpperCase()
      .includes(searchText.toUpperCase()) || movie.subtitle.toUpperCase()
      .includes(searchText.toUpperCase()) || movie.storyline.toUpperCase()
      .includes(searchText.toUpperCase()))
      .filter((movie) => movie.genre.includes(selectedGenre));
    if (bookmarkedOnly) return allMovies.filter((movie) => movie.bookmarked);
    return allMovies;
  }

  addNewMovie(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, movie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    this.filteredMovies();
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      movies,
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
    };

    this.handleAddMovie = this.handleAddMovie.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleAddMovie(newMovie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  handleChange({ target: { name, value, type, checked } }) {
    this.setState({ [name]: type === 'checkbox' ? checked : value });
  }

  getFilteredMovies() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    let result = movies.filter(({ title, subtitle, storyline, genre }) => (
      (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText))
        && (selectedGenre === '' || genre === selectedGenre)
    ));
    if (bookmarkedOnly) result = result.filter((movie) => movie.bookmarked);
    return result;
  }

  render() {
    const filteredMovies = this.getFilteredMovies();
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <>
        <p>Movie Library</p>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          onSearchTextChange={ this.handleChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

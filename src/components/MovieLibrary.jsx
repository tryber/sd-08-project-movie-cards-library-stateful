import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = props;
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleNewMovieAdd = this.handleNewMovieAdd.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleFilterFilms() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const allMovies = [...movies];
    if (searchText) {
      return allMovies.filter(({ title, subtitle, storyline }) => (
        title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
      ));
    }
    if (bookmarkedOnly) {
      return allMovies.filter((value) => value.bookmarked === true);
    }
    if (selectedGenre !== '') {
      return allMovies.filter(({ genre }) => genre === selectedGenre);
    }
    return allMovies;
  }

  handleNewMovieAdd(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie],
    });
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          onBookmarkedChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onSelectedGenreChange={ this.handleChange }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ this.handleFilterFilms() } />
        <AddMovie onClick={ this.handleNewMovieAdd } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

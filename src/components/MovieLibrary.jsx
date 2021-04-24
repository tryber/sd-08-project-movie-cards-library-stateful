import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.addMovieClick = this.addMovieClick.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  searchBar(searchText, bookmarkedOnly, selectedGenre) {
    return (
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ this.handleChange }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ this.handleChange }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ this.handleChange }
      />
    );
  }

  movieFilter(movies, searchText, bookmarkedOnly, selectedGenre) {
    let movieList = bookmarkedOnly ? movies.filter((movie) => movie.bookmarked) : movies;
    movieList = movieList.filter((movie) => movie.genre.includes(selectedGenre))
      .filter((movie) => movie.title.toLowerCase().includes(searchText.toLowerCase())
      || movie.subtitle.toLowerCase().includes(searchText.toLowerCase())
      || movie.storyline.toLowerCase().includes(searchText.toLowerCase()));
    return movieList;
  }

  addMovieClick(newMovie) {
    this.setState((currentState) => ({ movies: [...currentState.movies, newMovie] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filtered = this.movieFilter(movies, searchText, bookmarkedOnly, selectedGenre);
    return (
      <div>
        {this.searchBar(searchText, bookmarkedOnly, selectedGenre)}
        <MovieList movies={ filtered } />
        <AddMovie onClick={ this.addMovieClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;

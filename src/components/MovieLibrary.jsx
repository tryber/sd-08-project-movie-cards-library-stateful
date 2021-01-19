import React from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.addToMovieList = this.addToMovieList.bind(this);
    this.movieFilter = this.movieFilter.bind(this);

    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange(event) {
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  addToMovieList(movie) {
    const { movies } = this.state;
    this.setState({
      movies: [...movies, newMovie],
    });
  }

  movieFilter(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filteredMovie = bookmarkedOnly
      ? movies.filter((movie) => movie.bookmarked) : movies;
    filteredMovie = filteredMovie
      .filter((movie) => movie.genre.includes(selectedGenre)).filter((movie) => movie.title.includes(searchText)
        || movie.subtitle.includes(searchText)
        || movie.storyline.includes(searchText));
    return filteredMovie;
  }

  render() {
    const { movies, searchText, bookmarkedOnly, selectedGenre } = this.state
    const filteredMovie = this.movieFilter(movies);
    return (
      <div>
        <SearchBar
          searchText={searchText}
          bookmarkedOnly={bookmarkedOnly}
          selectedGenre={selectedGenre}
          onSearchTextChange={this.handleChange}
          onBookmarkedChange={this.handleChange}
          onSelectedGenreChance={this.handleChange}
        />
        <MovieList movies={filteredMovie} />
        <AddMovie onClick={this.addToMovieList} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieLibrary;
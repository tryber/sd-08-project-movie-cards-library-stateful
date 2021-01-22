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

    this.initMovies = movies;

    this.handleInsertMovie = this.handleInsertMovie.bind(this);
    this.handleChangeSearchText = this.handleChangeSearchText.bind(this);
    this.handleChangeBookmarkedOnly = this.handleChangeBookmarkedOnly.bind(this);
    this.handleChangeSelectedGenre = this.handleChangeSelectedGenre.bind(this);
  }

  handleInsertMovie(data) {
    const { movies } = this.state;
    if (data) {
      const aux = [...movies, data];
      this.setState({ movies: aux });
    }
    console.log(movies);
  }

  handleChangeSearchText(e) {
    this.setState({ searchText: e.target.value });
  }

  handleChangeBookmarkedOnly(e) {
    this.setState({ bookmarkedOnly: e.target.checked });
  }

  handleChangeSelectedGenre(e) {
    this.setState({ selectedGenre: e.target.value });
  }

  handleFilter1(moviesList) {
    const { searchText } = this.state;
    if (searchText !== '') {
      return moviesList.filter(
        (i) => i.title.includes(searchText)
          || i.subtitle.includes(searchText)
          || i.storyline.includes(searchText),
      );
    }
    return moviesList;
  }

  handleFilter2(moviesList) {
    const { selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return moviesList.filter((i) => i.genre.includes(selectedGenre));
    }
    return moviesList;
  }

  handleFilter3(moviesList) {
    const { bookmarkedOnly } = this.state;
    if (bookmarkedOnly) {
      return moviesList.filter((i) => i.bookmarked === true);
    }
    return moviesList;
  }

  handleMovieFilter(moviesList) {
    return this.handleFilter3(this.handleFilter2(this.handleFilter1(moviesList)));
  }

  // /* eslint-disable */
  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const selectedMovies = this.handleMovieFilter(movies);
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChangeSearchText }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChangeBookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChangeSelectedGenre }
        />
        <MovieList movies={ selectedMovies } />
        <AddMovie onClick={ this.handleInsertMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      imagePath: PropTypes.string,
      bookmarked: PropTypes.bool,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;

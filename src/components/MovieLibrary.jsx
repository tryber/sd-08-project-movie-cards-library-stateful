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
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filters = this.filters.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({ searchText: event.target.value });
  }

  onBookmarkedChange(event) {
    this.setState({ bookmarkedOnly: event.target.checked });
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value });
  }

  onClick(newMovie) {
    this.setState((pastState) => ({ movies: [...pastState.movies, newMovie] }));
  }

  filterByText(movies) {
    const { searchText } = this.state;
    const textInput = movies.filter(
      (name) => name.title.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
      || name.subtitle
        .toLowerCase()
        .indexOf(searchText.toLowerCase()) >= 0
        || name.storyline
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) >= 0,
    );

    return textInput;
  }

  filters() {
    const { movies, bookmarkedOnly, selectedGenre } = this.state;

    if (bookmarkedOnly && selectedGenre) {
      return this.filterByText(movies).filter(
        (name) => name.bookmarked === true && name.genre === selectedGenre,
      );
    }
    if (bookmarkedOnly) {
      return this.filterByText(movies).filter(
        (name) => name.bookmarked === true,
      );
    }
    if (selectedGenre) {
      return this.filterByText(movies).filter(
        (name) => name.genre === selectedGenre,
      );
    }
    return this.filterByText(movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ this.filters() } />
        <AddMovie onClick={ this.onClick } />
      </div>
    );
  }
}

MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;

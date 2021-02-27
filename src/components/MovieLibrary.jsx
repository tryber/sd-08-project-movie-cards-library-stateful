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
      bookmarkCheckbox: false,
      selectGenre: '',
      movies: [...movies],
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  onClick(state) {
    state.rating = parseFloat(state.rating);
    this.setState(({ movies }) => ({
      movies: [...movies, state],
    }));
  }

  searchBar() {
    const { searchText, bookmarkCheckbox, selectGenre } = this.state;
    return (
      <SearchBar
        searchText={ searchText }
        bookmarkedOnly={ bookmarkCheckbox }
        selectedGenre={ selectGenre }
        onSearchTextChange={ this.onChange }
        onBookmarkedChange={ this.onChange }
        onSelectedGenreChange={ this.onChange }
      />
    );
  }

  toLowerAndSearch(searchText, ...strs) {
    return strs.map((str) => str.toLowerCase())
      .some((str) => str.includes(searchText));
  }

  filteredMovies() {
    const { searchText, bookmarkCheckbox, selectGenre, movies } = this.state;
    return movies.filter(({ title, subtitle, storyline }) => (
      this.toLowerAndSearch(searchText, title, subtitle, storyline)
    ))
      .filter(({ bookmarked }) => {
        if (bookmarkCheckbox) return bookmarked === bookmarkCheckbox;
        return true;
      })
      .filter(({ genre }) => genre.includes(selectGenre));
  }

  render() {
    return (
      <main>
        <h2> My awesome movie library </h2>
        { this.searchBar() }
        <MovieList movies={ this.filteredMovies() } />
        <AddMovie onClick={ this.onClick } />
      </main>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    bookmarked: PropTypes.bool.isRequired,
    genre: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
  })).isRequired,
};

export default MovieLibrary;

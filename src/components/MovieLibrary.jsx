import React from 'react';
// import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.filterFavorite = this.filterFavorite.bind(this);
    this.filterGenre = this.filterGenre.bind(this);
    this.theFilter = this.theFilter.bind(this);
    this.newMovieAdd = this.newMovieAdd.bind(this);
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({
      searchText: value,
    });
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({
      bookmarkedOnly: checked,
    });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({
      selectedGenre: value,
    });
  }

  filterMoviesByInputText() {
    const { searchText, movies: { movies } } = this.state;
    return movies.filter(({ title, subtitle, storyline }) => title
      .toLowerCase()
      .includes(searchText.toLowerCase())
    || subtitle
      .toLowerCase()
      .includes(searchText.toLowerCase())
    || storyline
      .toLowerCase()
      .includes(searchText.toLowerCase()));
  }

  filterFavorite() {
    const { bookmarkedOnly, movies: { movies } } = this.state;
    if (bookmarkedOnly) return movies.filter((value) => value.bookmarked === true);
  }

  filterGenre() {
    const { selectedGenre, movies: { movies } } = this.state;
    if (selectedGenre !== '') {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
  }

  theFilter() {
    const { bookmarkedOnly, selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return this.filterGenre();
    }
    if (bookmarkedOnly === true) {
      return this.filterFavorite();
    }
    return this.filterMoviesByInputText();
  }

  newMovieAdd(state) {
    this.setState((stateAtual) => ({ movies: {
      movies: [...stateAtual.movies.movies, state] },
    }));
  }

  // componentDidUpdate() {
  //   console.log(this.state);
  // }

  render() {
    const filterMovies = this.theFilter();
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
        <AddMovie onClick={ this.newMovieAdd } />
        <MovieList movies={ filterMovies } />
      </div>
    );
  }
}

// MovieLibrary.propTypes = {
//   movies: PropTypes.arrayOf(PropTypes.object).isRequired,
// };

export default MovieLibrary;

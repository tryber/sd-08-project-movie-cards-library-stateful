// implement MovieLibrary component here
import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.AddMovie = this.AddMovie.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.byFavorite = this.byFavorite.bind(this);
    this.byGenre = this.byGenre.bind(this);
    this.ifFilter = this.ifFilter.bind(this);

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props,
    };
  }

  onSearchTextChange({ target: { value } }) {
    this.setState({ searchText: value });
  }

  onBookmarkedChange({ target: { checked } }) {
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target: { value } }) {
    this.setState({ selectedGenre: value });
  }

  AddMovie(state) {
    this.setState((newMovie) => ({ movies: {
      movies: [...newMovie.movies.movies, state] },
    }));
  }

  byMovieText() {
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

  byFavorite() {
    const { bookmarkedOnly, movies: { movies } } = this.state;
    if (bookmarkedOnly) return movies.filter((value) => value.bookmarked === true);
  }

  byGenre() {
    const { selectedGenre, movies: { movies } } = this.state;
    if (selectedGenre !== '') {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
  }

  ifFilter() {
    const { bookmarkedOnly, selectedGenre } = this.state;
    if (selectedGenre !== '') {
      return this.byGenre();
    }
    if (bookmarkedOnly === true) {
      return this.byFavorite();
    }
    return this.byMovieText();
  }

  render() {
    const moviesFiltred = this.ifFilter();
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
        <MovieList movies={ moviesFiltred } />
        <AddMovie onClick={ this.AddMovie } />

      </div>
    );
  }
}

/* MovieLibrary.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired }; */

export default MovieLibrary;

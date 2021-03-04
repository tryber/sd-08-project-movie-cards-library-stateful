// implement MovieLibrary component here
import React, { Component } from 'react';
import AddMovie from './AddMovie';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

class MovieLibrary extends Component {
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
    this.handleAddMovie = this.handleAddMovie.bind(this);
  }

  handleAddMovie(movie) {
    this.setState((stateBefore) => ({ movies: {
      movies: [...stateBefore.movies.movies, movie],
    } }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState({ bookmarkedOnly: checked });
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState({ selectedGenre: value });
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState({ searchText: value });
  }

  filterTextMovies(searchText, movies) {
    return movies.filter(({ title, subtitle, storyline }) => title
      .toLowerCase().includes(searchText.toLowerCase())
  || subtitle.toLowerCase().includes(searchText.toLowerCase())
  || storyline.toLowerCase().includes(searchText.toLowerCase()));
  }

  filterMoviesState() {
    const { movies: { movies }, searchText, selectedGenre, bookmarkedOnly } = this.state;
    if (selectedGenre !== '') {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (bookmarkedOnly) return movies.filter((book) => book.bookmarked === true);
    return this.filterTextMovies(searchText, movies);
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;

    const movies = this.filterMoviesState();
    return (
      <section>
        <h2> My awesome movie library </h2>
        <SearchBar
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.handleAddMovie } />
      </section>
    );
  }
}

export default MovieLibrary;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: [...movies],
    };
  }

  async onSearchTextChange({ target }) {
    const { searchText, movies } = this.state;
    await this.setState({ searchText: target.value }, () => {
      const newMovie = movies
        .filter((item) => item.title.includes(searchText)
          || item.subtitle.includes(target.value)
          || item.storyline.includes(target.value));
      this.setState({ movies: newMovie });
    });
  }

  async onBookmarkedChange({ target }) {
    const { movies } = this.state;
    console.log(target.checked);
    this.setState({ bookmarkedOnly: target.checked }, () => {
      const newMovie = movies
        .filter((item) => item.bookmarked === target.checked);
      this.setState({ movies: newMovie });
    });
  }

  onSelectedGenreChange({ target }) {
    const { movies } = this.state;
    this.setState({ selectedGenre: target.value }, () => {
      const newMovie = movies
        .filter((item) => item.genre === target.value);
      this.setState({ movies: newMovie });
    });
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ movies: [...movies, newMovie] });
  }

  renderMovies() {
    const { movies } = this.state;
    return (
      <MovieList movies={ movies } />
    );
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
        { this.renderMovies() }
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieLibrary;

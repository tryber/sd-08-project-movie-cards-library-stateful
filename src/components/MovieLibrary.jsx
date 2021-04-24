import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import './MovieLibrary.css';
class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
    this.filterMovies = this.filterMovies.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: this.props.movies,
    };
  }

  onSearchTextChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onBookmarkedChange(event) {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  }

  onSelectedGenreChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  filterMovies(movies) {
    return movies
      .filter((movie) =>
        (this.state.bookmarkedOnly ? movie.bookmarked === true : true),
      )
      .filter((movie) => movie.genre.includes(this.state.selectedGenre))
      .filter(
        (movie) =>
          movie.title
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.subtitle
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          movie.storyline
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()),
      );
  }

  addNewMovie(movie) {
    // const movieAdded = this.state.movies.concat(movie);
    // this.setState({ movies: movieAdded });
    this.setState((oldState) => ({ movies: [...oldState.movies, movie] }));
  }

  render() {
    return (
      <div>
        <h2 className="title"> My awesome movie library </h2>
        <SearchBar
          searchText={this.state.searchText}
          onSearchTextChange={this.onSearchTextChange}
          bookmarkedOnly={this.state.bookmarkedOnly}
          onBookmarkedChange={this.onBookmarkedChange}
          selectedGenre={this.state.selectedGenre}
          onSelectedGenreChange={this.onSelectedGenreChange}
        />
        <MovieList movies={this.filterMovies(this.state.movies)} />
        <AddMovie onClick={this.addNewMovie} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyline: PropTypes.string,
      rating: PropTypes.number,
      genre: PropTypes.string,
    }),
  ).isRequired,
};

export default MovieLibrary;

// implement MovieLibrary component here
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
      filteredMovies: movies,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addNewMovie = this.addNewMovie.bind(this);
  }

  onSearchTextChange(event) {
    this.setState({
      searchText: event.target.value,
    }, () => this.filterText());
  }

  onBookmarkedChange(event) {
    this.setState({
      bookmarkedOnly: event.target.checked,
    }, () => this.filterBookmark());
  }

  onSelectedGenreChange(event) {
    this.setState({ selectedGenre: event.target.value }, () => this.filterGenre());
  }

  addNewMovie(newMovie) {
    const { movies } = this.state;
    this.setState({ filteredMovies: [...movies, newMovie] });
    console.log({ movies });
  }

  filterBookmark() {
    const { filteredMovies } = this.state;
    this.setState({ filteredMovies: filteredMovies.filter((movie) => movie.bookmarked) });
  }

  filterGenre() {
    const { filteredMovies, selectedGenre } = this.state;
    this.setState({ filteredMovies: filteredMovies
      .filter((movie) => movie.genre === selectedGenre) });
  }

  filterText() {
    const { filteredMovies, searchText } = this.state;
    this.setState({ filteredMovies: filteredMovies
      .filter((movie) => [movie.title, movie.subtitle, movie.storyline]
        .some((content) => content.includes(searchText))) });
  }

  render() {
    const { bookmarkedOnly } = this.state;
    const { movies } = this.props;
    return (
      <div className="movie-library" data-testid="movie-library">
        <SearchBar
          selectedGenre={ this.selectedGenre }
          searchText={ this.searchText }
          bookmarkedOnly={ bookmarkedOnly }
          onSearchTextChange={ this.onSearchTextChange }
          onBookmarkedChange={ this.onBookmarkedChange }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ movies } />
        <AddMovie onClick={ this.addNewMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = ({
  movies: PropTypes.arrayOf(PropTypes.object),
}).isRequired;

export default MovieLibrary;

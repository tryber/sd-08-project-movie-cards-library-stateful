import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

class MovieLibrary extends React.Component {
  constructor(props) {
    super(props);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState(() => ({ searchText: value }));
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    this.setState(() => ({ bookmarkedOnly: checked }));
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState(() => ({ selectedGenre: value }));
  }

  filterMovies(movies) {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    let filtered = movies
      .filter(
        ({ title, subtitle, storyline }) => (title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText)
        ),
      ).filter(({ genre }) => genre.includes(selectedGenre));
    filtered = !bookmarkedOnly
      ? filtered : filtered.filter(({ bookmarked }) => bookmarked);
    return filtered;
  }

  addMovie(movieInfo) {
    this.setState((old) => ({ movies: [...old.movies, movieInfo] }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;
    const filteredMovies = this.filterMovies(movies);
    return (
      <div>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.onSearchTextChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.onBookmarkedChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.onSelectedGenreChange }
        />
        <MovieList movies={ filteredMovies } />
        <AddMovie onClick={ this.addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
